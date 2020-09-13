
// rfce to automatically create the import React from 'react'; and the function for it
import React from 'react';
import "./App.css";
import Header from './Header';
import Home from './Home';
// run command: npm import 'react-router-dom' - then add import line below
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';


function App() {
  return (
    // BEM
    <Router>
    <div className="App">
      <Header />
      
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/">
            <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
