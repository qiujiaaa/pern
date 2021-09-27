import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Restaurant from './components/Restaurant';
import Update from './components/Update';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/restaurants/update/:id">
            <Update />
          </Route>
          <Route exact path="/restaurants/:id">
            <Restaurant />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
