import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import * as constants from "consts";
import { Home } from "views";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={constants.Routes.HOME} component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
