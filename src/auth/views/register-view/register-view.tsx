import {Button, Card, Form, Input} from "antd";
import React, {useCallback} from "react";
import {UserCredentialsInput, useRegisterMutation} from "../../../main/lib/generated";
import useAuth, {setUser} from "../../lib/use-auth";
import {RegistrationContainer} from "./styled";

export default function RegistrationView() {
  const [register] = useRegisterMutation();
  const [, dispatch] = useAuth();

  // TODO: move to separate function
  const submit = useCallback(
    async (values: UserCredentialsInput) => {
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
      <Card title="Registration">
        <Form onFinish={submit}>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <Button htmlType="submit">Login</Button>
        </Form>
      </Card>
    </RegistrationContainer>
  );
}
