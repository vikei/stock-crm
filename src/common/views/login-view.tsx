import {Button, Card, FormGroup, InputGroup, Text} from "@blueprintjs/core";
import React, {useCallback} from "react";
import {useForm} from "react-hook-form";
import styled from "styled-components";
import {setUser, useAuthContext} from "../hooks/auth-context";
import {useLoginMutation, UserCredentials} from "../lib/generated";

const LoginContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 100,

  ".bp3-card": {
    width: 600,
  },
});

export default function LoginView() {
  const [login] = useLoginMutation();
  const {register, handleSubmit} = useForm<UserCredentials>();
  const [, dispatch] = useAuthContext();

  const submit = useCallback(
    async (values: UserCredentials) => {
      try {
        const {data} = await login({variables: {input: values}});
        setUser(dispatch, data?.login!);
      } catch (e) {
        console.error(e);
      }
    },
    [dispatch, login],
  );

  return (
    <LoginContainer>
      <Card>
        <Text tagName="h1">Login</Text>
        <form onSubmit={handleSubmit(submit)}>
          <FormGroup label="Email">
            <InputGroup name="email" inputRef={register} />
          </FormGroup>
          <FormGroup label="Password">
            <InputGroup name="password" type="password" inputRef={register} />
          </FormGroup>
          <Button type="submit">Login</Button>
        </form>
      </Card>
    </LoginContainer>
  );
}
