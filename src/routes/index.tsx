import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as constants from "consts";
import { PrivateRoute } from "components";
import { Login, Home } from "views";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={constants.Routes.LOGIN} component={Login} />
        <PrivateRoute exact path={constants.Routes.SEARCH} component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
