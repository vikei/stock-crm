import React, {ReactNode, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {useAuth} from "./auth-context";

export default function RequireAuth({children}: {children: ReactNode}) {
  const [{user}] = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
  }, [history, user]);

  if (!user) {
    return null;
  }

  return <>{children}</>;
}
