import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./views/Home/Home";
import Rankings from "./views/Rankings/Rankings";
import About from "./views/About/About";
import Weather from "./views/Weather/Weather";
import NotFound from "./views/NotFound";
// import Login from "./views/LogIn/Login";
// import Signin from './views/SignIn/Signin';
import Quiz from "./views/Quiz/Quiz"
import Admin from "./views/Admin/Admin";
import LogInForm from './views/LogIn/Login';
import SignUp from './views/SignUp/SignUp';
import User from './views/User/User';
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/rankings" component={Rankings} />
        <Route exact path="/map" component={Map} />
	      <Route exact path="/weather" component={Weather} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={LogInForm} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/user" component={User} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
