import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import UserDetails from './Components/UserDetaiis/UserDetails';

function App() {
  return ( 
      <Router>
        <Switch>
          <Route path="/home">
              <Home/>
          </Route>
          <Route path="/user/:userId">
             <UserDetails/>
          </Route>
          <Route exact path="/">
                <Home/>
          </Route>
          <Route path="*">
                <NoMatch/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
