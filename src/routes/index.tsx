import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as constants from "consts";
import { PrivateRoute } from "components";
import { Home } from "views";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={constants.Routes.HOME} component={Home} />
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
