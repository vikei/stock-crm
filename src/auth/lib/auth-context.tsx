import React, {createContext, Dispatch, ReactNode, useReducer} from "react";
import useRequiredContext from "../../library/lib/use-required-context";
import {User} from "../../main/lib/generated";

interface AuthState {
  user: User | null;
}

interface SetUserAction {
  type: "setUser";
  payload: User;
}

interface LogoutAction {
  type: "logout";
}

type AuthActions = SetUserAction | LogoutAction;

function authReducer(state: AuthState, action: AuthActions) {
  switch (action.type) {
    case "setUser":
      return {...state, user: action.payload};
    case "logout":
      return {...state, user: null};
    default:
      throw Error("Unknown action");
  }
}

export function setUser(dispatch: Dispatch<AuthActions>, user: User) {
  localStorage.setItem("user", JSON.stringify(user));
  return dispatch({type: "setUser", payload: user});
}

export function logout(dispatch: Dispatch<AuthActions>) {
  localStorage.removeItem("user");
  return dispatch({type: "logout"});
}

function useAuthReducer() {
  return useReducer(authReducer, {user: null}, initState => {
    const userDraft = localStorage.getItem("user");
    const user = userDraft ? JSON.parse(userDraft) : null;
    return {...initState, user};
  });
}

const AuthContext = createContext<ReturnType<typeof useAuthReducer> | undefined>(undefined);
AuthContext.displayName = "AuthProvider";

export function AuthProvider({children}: {children: ReactNode}) {
  const [state, dispatch] = useAuthReducer();
  return <AuthContext.Provider value={[state, dispatch]}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useRequiredContext(AuthContext);
}
