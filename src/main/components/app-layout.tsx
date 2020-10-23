import React, {ReactNode} from "react";
import styled from "styled-components";
import AppDrawer from "./app-drawer";
import AppSidebar from "./app-sidebar";

const AppLayoutContainer = styled.div({
  display: "flex",
});

const SidebarContainer = styled.div({
  padding: 50,
  minWidth: 300,
});

const MainContainer = styled.main({
  padding: 50,
  flexGrow: 2,
});

export default function AppLayout({children}: {children: ReactNode}) {
  return (
    <AppLayoutContainer>
      <SidebarContainer>
        <AppSidebar />
      </SidebarContainer>
      <MainContainer>{children}</MainContainer>
      <AppDrawer />
    </AppLayoutContainer>
  );
}
