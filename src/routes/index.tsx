import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as constants from "consts";
import { PrivateRoute } from "components";
import { Login } from "views";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={constants.Routes.LOGIN} component={Login} />
        <PrivateRoute
          exact
          path={constants.Routes.SEARCH}
          component={() => <p>Hola mundo!</p>}
        />
      </Switch>
    </Router>
  );
}

export default Routes;
