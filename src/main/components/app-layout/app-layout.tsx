import {useHover} from "ahooks";
import React, {ReactNode, useRef} from "react";
import Drawer from "../../../library/components/drawer";
import AppSidebar from "../app-sidebar";
import {AppFooter, AppLayoutWrapper, AppSider} from "./app-layout.styled";

export default function AppLayout({children}: {children: ReactNode}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isHovering = useHover(ref);

  return (
    <AppLayoutWrapper>
      <AppSider width={250} collapsed={!isHovering} collapsible trigger={null}>
        <div ref={ref}>
          <AppSidebar />
        </div>
      </AppSider>
      <AppLayoutWrapper>
        {children}
        <AppFooter>Ant Design</AppFooter>
      </AppLayoutWrapper>
      <Drawer />
    </AppLayoutWrapper>
  );
}
