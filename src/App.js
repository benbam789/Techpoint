import React from 'react' //{ useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
//import Markets from './components/pages/Markets';
import Socials from './components/pages/Socials';
import Home from './components/pages/Home';
//import { commerce } from './components/pages/lib/commerce';
import MarketPage2 from './components/pages/MarketPage2';
import SignUp from './components/pages/SignUp';
import RegisterPage from './components/pages/RegisterPage';

//function App() {
const App = () => {
  /*const [markets, setMarkets] = useState([]);
  
  const fetchProducts = async () => {
    const { data } = await commerce.markets.list();
    setMarkets(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(markets);*/

  return (
    <>    
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/markets' component={MarketPage2} />
        <Route path='/socials' component={Socials} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/register' component={RegisterPage} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
