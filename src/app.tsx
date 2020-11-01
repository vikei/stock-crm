import {ApolloProvider} from "@apollo/client";
import React from "react";
import {AuthProvider} from "./auth/lib/auth-context";
import GlobalStyles from "./main/components/global-styles";
import Router from "./main/components/router/router";
import apolloClient from "./main/lib/apollo-client";
import {DrawerProvider} from "./main/lib/drawer-context";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <DrawerProvider>
        <AuthProvider>
          <GlobalStyles />
          <Router />
        </AuthProvider>
      </DrawerProvider>
    </ApolloProvider>
  );
}

export default App;
