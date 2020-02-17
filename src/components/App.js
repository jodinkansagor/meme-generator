import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import MemeContainer from './MemeContainer';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MemeContainer} />
       </Switch>
    </Router>
  )
}
  