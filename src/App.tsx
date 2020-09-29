import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import React from "react";
import "./assets/antd-overwrites.css";

import { theme } from "./configs/theme";
import GlobalStyle from "./components/style/GlobalStyle";
import Layout from "./components/layout/Layout";
import MessageHub from "./components/message-hub/MessageHub";
import EditCV from "./components/views/EditCV";
import GitHubLogin from "./components/views/GitHubLogin";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <MessageHub />
        <Layout>
          <Switch>
            <Route path="/login" component={GitHubLogin} />
            <Route path="/cv" component={EditCV} />
            <Route path="/dashboard" component={Dashboard} />
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
