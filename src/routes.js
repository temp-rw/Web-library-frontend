import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./pages/App";
import Login from "./pages/LoginPage";
import BookDetails from "./pages/BookDetails";
import { loginUrl, bookUrl, dashboardUrl } from "./constants";

export default (
  <Router>
    <Switch>
      <Route exact path={ loginUrl } component={Login} />
      <Route path={ bookUrl } component={BookDetails} />
      <Route path={ dashboardUrl } component={App} />
    </Switch>
  </Router>
);
