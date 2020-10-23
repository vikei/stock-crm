import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const AppSidebarContainer = styled.div({
  textTransform: "uppercase",
  fontWeight: 500,

  ul: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },

  li: {
    listStyle: "none",

    "&:not(last-of-type)": {
      marginBottom: 15,
    },

    "& .active": {
      color: "#40464C",
    },
  },
});

export default function AppSidebar() {
  return (
    <AppSidebarContainer>
      <nav>
        <ul>
          <li>
            <NavLink to="/stock" activeClassName="active">
              Склад
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" activeClassName="active">
              Заказы
            </NavLink>
          </li>
        </ul>
      </nav>
    </AppSidebarContainer>
  );
}
