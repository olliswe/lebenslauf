import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import React from "react";
// import "./assets/antd-overwrites.css";
import "./App.less";

import { theme } from "./configs/theme";
import GlobalStyle from "./components/style/GlobalStyle";
import Layout from "./components/layout/Layout";
import MessageHub from "./components/message-hub/MessageHub";
import AuthState from "./components/containers/AuthState";
import MainRouter from "./components/routing/MainRouter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <MessageHub />
        <AuthState />
        <Layout>
          <MainRouter />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
