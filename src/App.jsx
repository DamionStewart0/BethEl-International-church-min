// import {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/screens/Home/Home';
import About from './components/screens/About/About';
import Ministries from './components/screens/Ministries/Ministries';
import Hebrew from './components/screens/Hebrew/Hebrew';
import Biography from './components/screens/Biography/Biography';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/about-us'>
          <About />
        </Route>

        <Route exact path='/ministries'>
          <Ministries />
        </Route>

        <Route exact path='/biography'>
          <Biography />
        </Route>

        <Route exact path='/hebrew-in-you'>
          <Hebrew />
        </Route>
        {/* <Route exact path='/store'>
          <Store />
        </Route> */}
        





      </Switch>
      
    </div>
  );
};

export default App;
