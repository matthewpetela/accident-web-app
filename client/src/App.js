import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./views/Home/Home";
import Rankings from "./views/Rankings/Rankings";
import About from "./views/About/About";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/rankings" component={Rankings} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
