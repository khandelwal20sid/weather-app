import './App.css';
import Home from './components/Home'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CityHistory from './components/CityHistory'
import Error404 from './components/Error404';
import UserLocation from './components/UserLocation';

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/history" component={CityHistory} />
          <Route path="/current-location" component={UserLocation} />
          <Route component={Error404} />           
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
