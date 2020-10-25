import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import React from "react";
import "./assets/antd-overwrites.css";

import { theme } from "./configs/theme";
import GlobalStyle from "./components/style/GlobalStyle";
import Layout from "./components/layout/Layout";
import MessageHub from "./components/message-hub/MessageHub";
import AuthState from "./components/containers/AuthState";
import MainRouter from "./components/routing/MainRouter";
import SWRConfig from "./components/containers/SWRConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <MessageHub />
        <AuthState />
        <SWRConfig>
          <Layout>
            <MainRouter />
          </Layout>
        </SWRConfig>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
