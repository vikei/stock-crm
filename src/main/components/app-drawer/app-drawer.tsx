import {Drawer} from "antd";
import React from "react";
import {useDrawer} from "../../lib/drawer-context";

export default function AppDrawer() {
  const {
    state: {body},
    getProps,
  } = useDrawer();

  return <Drawer {...getProps()}>{body}</Drawer>;
}
