import {Button, Card, FormGroup, InputGroup, Text} from "@blueprintjs/core";
import React, {useCallback} from "react";
import {useForm} from "react-hook-form";
import styled from "styled-components";
import {setUser, useAuthContext} from "../hooks/auth-context";
import {UserCredentials, useRegisterMutation} from "../lib/generated";

const RegistrationContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 100,

  ".bp3-card": {
    width: 600,
  },
});

export default function RegistrationView() {
  const [register] = useRegisterMutation();
  const {register: registerField, handleSubmit} = useForm<UserCredentials>();
  const [, dispatch] = useAuthContext();

  const submit = useCallback(
    async (values: UserCredentials) => {
      try {
        const {data} = await register({variables: {input: values}});
        setUser(dispatch, data?.register!);
      } catch (e) {
        console.error(e);
      }
    },
    [dispatch, register],
  );

  return (
    <RegistrationContainer>
      <Card>
        <Text tagName="h1">Registration</Text>
        <form onSubmit={handleSubmit(submit)}>
          <FormGroup label="Email">
            <InputGroup name="email" inputRef={registerField} />
          </FormGroup>
          <FormGroup label="Password">
            <InputGroup name="password" type="password" inputRef={registerField} />
          </FormGroup>
          <Button type="submit">Register</Button>
        </form>
      </Card>
    </RegistrationContainer>
  );
}
