import React from 'react';
import Navbar from './components/Navbar';
//import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
//import Social from './components/pages/Social';
//import Market from './components/pages/Market';

function App() {
  return (
    <>
    
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact /> 
      </Switch>
    </Router>
    </>
  );
}

export default App;
