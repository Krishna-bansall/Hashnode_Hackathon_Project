import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages';
import Feedback from './components/pages/feedback';
import SignUp from './components/pages/signup';
import SignIn from './components/pages/signin';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/signin" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <h1> Hi </h1  >
    </Router>
  );
}

export default App;