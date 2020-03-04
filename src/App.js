import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Contact, Resources, About } from './pages';
import Navbar from './util/Navbar.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/*
          Navbar stuff with links here
        */}
        <Navbar/>
        <Switch>
          <Route path="/about"> 
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>

          <Route path="/resources">
            <Resources/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
