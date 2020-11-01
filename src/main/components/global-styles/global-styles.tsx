import React from "react";
import {createGlobalStyle} from "styled-components";
import globalStyles from "../../theme/global-styles";

const GlobalStyles = createGlobalStyle(globalStyles);

export default function AppGlobalStyles() {
  return <GlobalStyles theme={{}} />;
}
