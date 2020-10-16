import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <BrowserRouter>
        <Route path="/">Ready to start...</Route>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
