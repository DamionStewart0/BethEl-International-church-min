import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Ministries from './components/Ministries/Ministries';
import Hebrew from './components/Hebrew/Hebrew';
import Biography from './components/Biography/Biography';
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
