import "antd/dist/antd.css";
import "./App.less";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import React from "react";

import { theme } from "./configs/theme";
import GlobalStyle from "./components/style/GlobalStyle";
import Layout from "./components/layout/Layout";
import MessageHub from "./components/message-hub/MessageHub";
import EditCV from "./components/views/EditCV";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <MessageHub />
        <Layout>
          <Switch>
            <Route path="/cv" component={EditCV} />
            <Redirect from="/" to="/cv" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
