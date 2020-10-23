import {Drawer} from "@blueprintjs/core";
import React from "react";
import styled from "styled-components";
import {useDrawerContext} from "../lib/drawer-context";

const BodyContainer = styled.div({
  padding: 20,
});

export default function AppDrawer() {
  const {
    state: {body},
    getProps,
  } = useDrawerContext();

  return (
    <Drawer {...getProps()}>
      <BodyContainer>{body}</BodyContainer>
    </Drawer>
  );
}
