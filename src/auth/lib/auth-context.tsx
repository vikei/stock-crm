import React, {createContext, Dispatch, ReactNode, useContext, useReducer} from "react";
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

function useAuth() {
  return useReducer(authReducer, {user: null}, initState => {
    const userDraft = localStorage.getItem("user");
    const user = userDraft ? JSON.parse(userDraft) : null;
    return {...initState, user};
  });
}

const AuthContext = createContext<ReturnType<typeof useAuth> | undefined>(undefined);

export function AuthProvider({children}: {children: ReactNode}) {
  const [state, dispatch] = useAuth();
  return <AuthContext.Provider value={[state, dispatch]}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("Expect to wrap in AuthProvider");
  }
  return ctx;
}
