import {Drawer} from "antd";
import React from "react";
import {useDrawerContext} from "../lib/drawer-context";

export default function AppDrawer() {
  const {
    state: {body},
    getProps,
  } = useDrawerContext();

  return <Drawer {...getProps()}>{body}</Drawer>;
}
