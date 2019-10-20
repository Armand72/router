import React from 'react';
import './App.css';
import Home from './Home';
import History from './History';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/notre-histoire"><li>History</li></Link>
        </ul>
      </nav>


      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/notre-histoire" component={History}/>
      </Switch>


    </div>
    </Router>
  );
}

export default App;
