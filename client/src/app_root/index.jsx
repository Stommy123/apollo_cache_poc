import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ToastContainer } from 'react-toastify';
import client from './client';
import Content from '../content';

const App = _ => (
  <ApolloProvider client={client}>
    <Router>
      <Content />
    </Router>
    <ToastContainer />
  </ApolloProvider>
);

export default App;
