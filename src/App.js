import React from 'react';// { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Markets from './components/pages/Markets';
import Socials from './components/pages/Socials';
import Home from './components/pages/Home';
//import { commerce } from './components/pages/lib/commerce';

function App() {
 
  return (
    <>    
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/markets' component={Markets} />
        <Route path='/socials' component={Socials} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
