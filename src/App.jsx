// import {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/screens/Home/Home';
import About from './components/screens/About/About';
import Ministries from './components/screens/Ministries/Ministries';
import Hebrew from './components/screens/Hebrew/Hebrew';
import Biography from './components/screens/Biography/Biography';
import Store from './components/screens/Store/Store';
import Donation from './components/screens/Donations/Donation';
import Events from './components/screens/Events/Events';
import Contact from './components/screens/Contact/Contact';
import Blog from './components/screens/Blog/Blog';
import './App.css';
import Footer from './components/shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='content'>

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

        <Route exact path='/store'>
          <Store />
        </Route>

         <Route exact path='/donation'>
          <Donation />
        </Route> 

        <Route exact path='/events'>
          <Events />
        </Route>

        <Route exact path='/contact'>
          <Contact />
        </Route>

        <Route exact path='/blog'>
          <Blog />
        </Route>
       
      </Switch>
      
      </div>
      <Footer />
    </div>
  );
};

export default App;
