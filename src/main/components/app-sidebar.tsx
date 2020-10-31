import {CodeSandboxOutlined, DatabaseOutlined} from "@ant-design/icons/lib";
import {Menu} from "antd";
import React from "react";
import {Link, matchPath, useLocation} from "react-router-dom";
import styled from "styled-components";

const AppSidebarNav = styled(Menu)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",

  width: "100%",

  backgroundColor: "initial",
  borderRight: "none",
});

const AppSidebarItem = styled(Menu.Item)({
  borderRadius: 5,
  color: "#f2f2f2",

  width: "70%",

  ".ant-layout-sider-collapsed &": {
    padding: "0 16px",
    width: "initial",
  },

  "a, a:hover, svg": {
    color: "#f2f2f2",
  },

  "&.ant-menu-item-active": {
    backgroundColor: "rgba(26, 43, 129, .5)",
  },

  "&.ant-menu-item-selected": {
    backgroundColor: "#1A2B81!important",
  },
});

const menuKeys: {[key: string]: string} = {
  stock: "/stock",
  orders: "/orders",
};

export default function AppSidebar() {
  const location = useLocation();

  const getActiveMenuKey = () =>
    Object.keys(menuKeys).filter(menuKey =>
      Boolean(
        matchPath(location.pathname, {
          path: menuKeys[menuKey],
        }),
      ),
    );

  return (
    <AppSidebarNav defaultSelectedKeys={getActiveMenuKey()}>
      <AppSidebarItem key="stock" icon={<DatabaseOutlined />}>
        <Link to="/stock">Склад</Link>
      </AppSidebarItem>
      <AppSidebarItem key="orders" icon={<CodeSandboxOutlined />}>
        <Link to="/orders">Заказы</Link>
      </AppSidebarItem>
    </AppSidebarNav>
  );
}
