import {Menu} from "antd";
import styled from "styled-components";

export const AppSidebarNav = styled(Menu)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",

  width: "100%",

  backgroundColor: "initial",
  borderRight: "none",
});

export const AppSidebarItem = styled(Menu.Item)({
  borderRadius: 5,
  color: "#f2f2f2",

  width: "70%",

  "&.ant-menu-item::after": {
    content: "none",
  },

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
