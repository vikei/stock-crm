import {Drawer as AntDrawer} from "antd";
import React from "react";
import useDrawer from "../../lib/use-drawer";

export default function Drawer() {
  const {
    state: {body},
    getProps,
  } = useDrawer();

  return <AntDrawer {...getProps()}>{body}</AntDrawer>;
}
