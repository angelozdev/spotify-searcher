import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import * as constants from "consts";
import { Home } from "views";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={constants.Routes.HOME} component={Home} />
        <Route exact path="/spotify">
          <h1>Estás registrado :D</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
