import "./App.less";

import { Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import React from "react";

import { theme } from "./configs/theme";
import GlobalStyle from "./components/style/GlobalStyle";
import Layout from "./components/layout/Layout";
import MessageHub from "./components/message-hub/MessageHub";
import Test from "./components/Test";
import history from "./helpers/history";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router history={history}>
        <MessageHub />
        <Layout>
          <Route path="" component={Test} />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
