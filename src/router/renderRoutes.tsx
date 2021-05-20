import React from 'react';
import {
  Switch, Route, Redirect, RouteComponentProps,
} from 'react-router-dom';
import { IRoutesItems } from './index';

const renderRoutes = (routes: IRoutesItems[]) => (
  routes
    ? (
      <Switch>
        {
          routes.map((items) => (
            <Route
              key={items.key}
              path={items.path}
              render={(props: RouteComponentProps | any) => {
                const { location } = props;

                if (location.pathname === '/') {
                  return <Redirect
                    to={{
                      pathname: '/home',
                      state: { from: location }
                    }}
                  />;
                }

                return <items.component {...props} route={items} />;
              }}
            />
          ))
        }
      </Switch>
    )
    : null
);

export default renderRoutes;
