import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import routerPath from '../../config/router-config';
import renderRoutes from '../../router/renderRoutes';

const Header: React.FC = (props: RouteComponentProps | any): React.ReactElement => {
  const { route } = props;
  return (
    <>
      <AppBar>
        {
          routerPath.map((item) => (
            <Link
              key={item.id}
              to={item.path}
            >
              {item.text}
            </Link>
          ))
        }
      </AppBar>
      <div>
        {renderRoutes(route.children)}
      </div>
    </>
  );
};

export default Header;
