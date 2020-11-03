import React, {createContext, Dispatch, ReactNode, useContext, useReducer} from "react";

interface DrawerState {
  open: boolean;
  body?: ReactNode | null;
  title?: React.ReactNode;
  width?: string | number;
  onClose?: () => void;
}

interface OpenDrawerAction {
  type: "open";
  payload: Omit<DrawerState, "open">;
}

interface CloseDrawerAction {
  type: "close";
}

type DrawerActions = OpenDrawerAction | CloseDrawerAction;

function drawerReducer(state: DrawerState, action: DrawerActions): DrawerState {
  switch (action.type) {
    case "open":
      return {...state, open: true, ...action.payload};
    case "close":
      return {...state, open: false, body: null};
    default:
      throw Error("Unknown action");
  }
}

export function openDrawer(dispatch: Dispatch<DrawerActions>, payload: Omit<DrawerState, "open">) {
  return dispatch({type: "open", payload});
}

export function closeDrawer(dispatch: Dispatch<DrawerActions>) {
  return dispatch({type: "close"});
}

function useDrawer() {
  return useReducer(drawerReducer, {open: false, body: null});
}

const DrawerContext = createContext<ReturnType<typeof useDrawer> | undefined>(undefined);

export function DrawerProvider({children}: {children: ReactNode}) {
  const [state, dispatch] = useDrawer();
  return <DrawerContext.Provider value={[state, dispatch]}>{children}</DrawerContext.Provider>;
}

export function useDrawerContext() {
  const ctx = useContext(DrawerContext);
  if (!ctx) {
    throw new Error("Expect to wrap in DrawerProvider");
  }
  return {
    state: ctx[0],
    dispatch: ctx[1],
    getProps: () => ({
      visible: ctx[0].open,
      title: ctx[0].title,
      width: ctx[0].width,
      onClose: () => {
        ctx[0].onClose?.();
        closeDrawer(ctx[1]);
      },
    }),
  };
}
