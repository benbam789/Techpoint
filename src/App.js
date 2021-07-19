import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Markets from './components/pages/Markets';
import Social from './components/pages/Social';
import Home from './components/pages/Home';
function App() {
  return (
    <>
    
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/markets' component={Markets} />
        <Route path='/social' component={Social} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
