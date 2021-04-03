import React, { useState } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { mockData } from './data';

const App = () => {
  const exampleData = mockData[0];

  return (
    <>
      <nav>
        <Link to="/certificate">Certificate</Link>
        <Link to="/display">Feed</Link>
        <Link to="/upload">Deep Dive</Link>
      </nav>
      <Switch>
        <Route path="/certificate">
          <section></section>
        </Route>
        <Route path="/display">
          <section></section>
        </Route>
        <Route path="/upload">
          <section></section>
        </Route>
        <Redirect to={'/certificate'} />
      </Switch>
    </>
  );
};

export default App;
