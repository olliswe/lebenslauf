import React from 'react';
import MessageHub from "./components/message-hub/MessageHub";
import Test from "./components/Test";
import { ThemeProvider } from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';
import {theme} from "./configs/theme";
import history from "./helpers/history";
import './App.less'
import Layout from "./components/layout/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <MessageHub/>
        <Layout>
            <Route path="" component={Test}/>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
