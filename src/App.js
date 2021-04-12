import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import LeagueDetails from './Component/LeagueDetails/LeagueDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/details/:id'>
            <LeagueDetails></LeagueDetails>
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
