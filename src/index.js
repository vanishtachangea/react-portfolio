import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import App from './components/App';
import Docs from './components/Docs';
import Header from './components/Header';
import EvensOrOdds from './projects/evenoddgame';
import './index.css';

ReactDOM.render(
    <Router>
        <Switch>
          <Route exact path="/" render={()=><Header><App/></Header>}>
          </Route>
          <Route path="/docs" render={()=><Header><Docs/></Header>}>
          </Route>
          <Route path="/evenoddgame" render={()=><Header><EvensOrOdds/></Header>}>
          </Route>
        </Switch>
    </Router>,
    document.getElementById('root'));
