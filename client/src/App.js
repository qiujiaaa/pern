import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Restaurant from './components/Restaurant/Restaurant';
import Update from './components/Update/Update';
import { RestaurantContextProvider } from './context/RestaurantsContext';

const App = () => {
  return (
    <RestaurantContextProvider>
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
    </RestaurantContextProvider>
  );
};

export default App;
