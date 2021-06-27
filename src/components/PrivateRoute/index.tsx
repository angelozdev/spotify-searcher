import { useRecoilValue } from "recoil";
import { Route, RouteProps, Redirect } from "react-router-dom";

import { authAtom } from "recoilState/auth/atoms";
import { Routes } from "consts";

interface Props extends RouteProps {
  component: () => JSX.Element;
}

function PrivateRoute({ component, ...rest }: Props) {
  const { isAuth } = useRecoilValue(authAtom);
  const Component = component;

  return (
    <Route
      {...rest}
      render={() => {
        if (!isAuth) {
          return (
            <Redirect
              to={{ pathname: Routes.HOME, state: { from: rest.location } }}
            />
          );
        }

        return <Component />;
      }}
    />
  );
}

export default PrivateRoute;
