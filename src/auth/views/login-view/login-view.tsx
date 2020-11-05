import {Button, Card, Form, Input} from "antd";
import React, {useCallback} from "react";
import {useLoginMutation, UserCredentials} from "../../../main/lib/generated";
import useAuth, {setUser} from "../../lib/use-auth";
import {LoginContainer} from "./styled";

export default function LoginView() {
  const [login] = useLoginMutation();
  const [, dispatch] = useAuth();

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
      <Card title="Login">
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
    </LoginContainer>
  );
}
