import React from 'react';
import Navbar from './components/Navbar';
//import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Market from './components/pages/Market';
import Social from './components/pages/Social';

function App() {
  return (
    <>
    
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact />
        <Route path='/market' component={Market} />
        <Route path='/social' component={Social} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
