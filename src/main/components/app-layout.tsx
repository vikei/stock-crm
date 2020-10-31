import React, {ReactNode, useRef} from "react";
import {Layout} from "antd";
import styled from "styled-components";
import {useHover} from "ahooks";
import AppDrawer from "./app-drawer";
import AppSidebar from "./app-sidebar";

const {Header, Footer, Sider, Content} = Layout;

const AppLayoutWrapper = styled(Layout)({
  backgroundColor: "#FFF",
  minHeight: "100%",
});

const AppHeader = styled(Header)({
  backgroundColor: "#FFF",
  paddingLeft: 20 + 16, // +16 from AppContent margin left
  fontWeight: 500,
  fontSize: "3rem",
});

const AppSider = styled(Sider)({
  backgroundColor: "#2F49D0",
  borderRight: "1px solid #E7ECEF",

  "& > .ant-layout-sider-children > div": {
    paddingTop: 100,
    height: "100%",
  },
});

const AppContent = styled(Content)({
  backgroundColor: "#FFF",
  padding: 20,
  margin: "24px 16px",
});

const AppFooter = styled(Footer)({
  backgroundColor: "#FFF",
});

export function AppLayoutContent({title, children}: {title?: ReactNode; children: ReactNode}) {
  return (
    <>
      {title && <AppHeader>{title}</AppHeader>}
      <AppContent>{children}</AppContent>
    </>
  );
}

export default function AppLayout({children}: {children: ReactNode}) {
  const ref = useRef<any>();
  const isHovering = useHover(ref);

  return (
    <AppLayoutWrapper>
      <AppSider width={250} collapsed={!isHovering} collapsible trigger={null}>
        <div ref={ref}>
          <AppSidebar />
        </div>
      </AppSider>
      <AppLayoutWrapper>
        <Content>{children}</Content>
        <AppFooter>Ant Design</AppFooter>
      </AppLayoutWrapper>
      <AppDrawer />
    </AppLayoutWrapper>
  );
}
