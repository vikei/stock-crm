import {Layout} from "antd";
import styled from "styled-components";

const {Header, Footer, Sider, Content} = Layout;

export const AppLayoutWrapper = styled(Layout)({
  backgroundColor: "#FFF",
  minHeight: "100%",
});

export const AppHeader = styled(Header)({
  backgroundColor: "#FFF",
  paddingLeft: 20 + 16, // +16 from AppContent margin left
  fontWeight: 500,
  fontSize: "3rem",
});

export const AppSider = styled(Sider)({
  backgroundColor: "#2F49D0",
  borderRight: "1px solid #E7ECEF",

  "& > .ant-layout-sider-children > div": {
    paddingTop: 100,
    height: "100%",
  },
});

export const AppContentWrapper = styled(Content)({
  backgroundColor: "#FFF",
  padding: 20,
  margin: "24px 16px",
});

export const AppFooter = styled(Footer)({
  backgroundColor: "#FFF",
});
