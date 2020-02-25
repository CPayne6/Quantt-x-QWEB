import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Contact, Resources, About } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/*
          Navbar stuff with links here
        */}
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

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
