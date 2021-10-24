import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar';

const Layout = (props: { children?: React.ReactNode }) => (
  <React.Fragment>
    <div>
      <Navbar />
      <BrowserRouter>
      <Switch>{props.children}</Switch>
      </BrowserRouter>
    </div>
  </React.Fragment>
);
export default Layout;
