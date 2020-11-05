import React from "react";
import {createGlobalStyle} from "styled-components";
import globalStyles from "../../theme/global-styles";

const GlobalStylesWrapper = createGlobalStyle(globalStyles);

export default function GlobalStyles() {
  return <GlobalStylesWrapper theme={{}} />;
}
