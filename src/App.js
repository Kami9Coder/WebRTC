import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import Home from "./Home";
import Meet from "./Meet";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/meet' component={Meet}/>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
