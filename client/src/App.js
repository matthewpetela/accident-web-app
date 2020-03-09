import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import Options from "./components/Options.js"
import Services from "./components/Services.js"

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
      <Options/>
      <Services/>
    </div>
  );
}

export default App;
