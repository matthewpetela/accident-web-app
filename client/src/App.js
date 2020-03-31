import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import Map from "./views/Map/Map";
import About from "./views/About/About";
import Weather from "./views/Weather/Weather";
import NotFound from "./views/NotFound";
import Quiz from "./views/Quiz/Quiz"
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/map" component={Map} />
		<Route exact path="/weather" component={Weather} />
        <Route exact path="/about" component={About} />
        <Route exact path="/quiz" component={Quiz} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
