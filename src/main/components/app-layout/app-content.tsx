import React, {ReactNode} from "react";
import {AppContentWrapper, AppHeader} from "./app-layout.styled";

export default function AppContent({title, children}: {title?: ReactNode; children: ReactNode}) {
  return (
    <>
      {title && <AppHeader>{title}</AppHeader>}
      <AppContentWrapper>{children}</AppContentWrapper>
    </>
  );
}
