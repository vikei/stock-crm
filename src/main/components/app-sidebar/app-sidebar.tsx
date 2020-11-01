import {CodeSandboxOutlined, DatabaseOutlined} from "@ant-design/icons/lib";
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {getActiveMenuByLocationPath} from "./app-sidebar.lib";
import {AppSidebarItem, AppSidebarNav} from "./app-sidebar.styled";

export default function AppSidebar() {
  const {pathname} = useLocation();

  return (
    <AppSidebarNav defaultSelectedKeys={getActiveMenuByLocationPath(pathname)}>
      <AppSidebarItem key="stock" icon={<DatabaseOutlined />}>
        <Link to="/stock">Склад</Link>
      </AppSidebarItem>
      <AppSidebarItem key="orders" icon={<CodeSandboxOutlined />}>
        <Link to="/orders">Заказы</Link>
      </AppSidebarItem>
    </AppSidebarNav>
  );
}
