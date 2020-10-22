import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import GlobalStyles from "./common/components/global-styles";
import {ApolloProvider} from "@apollo/client";
import apolloClient from "./common/lib/apollo-client";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Route path="/">Ready to start...</Route>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
