import React, { useEffect } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Navbar from "./components/root/navbar/Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Applications from "./components/cost/applications/Applications";
import Resources from "./components/cost/resources/Resources";

import Alert from "./components/root/alert/Alert";

let App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <div>
          <Alert />
        </div>
        <Switch>
          <Route exact path="/" component={Applications} />
          <Route exact path="/resources" component={Resources} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};
export default App;
