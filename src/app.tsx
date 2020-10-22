import {ApolloProvider} from "@apollo/client";
import React from "react";
import GlobalStyles from "./common/components/global-styles";
import {AuthProvider} from "./common/hooks/auth-context";
import Router from "./common/router";
import apolloClient from "./common/lib/apollo-client";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <GlobalStyles />
        <Router />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
