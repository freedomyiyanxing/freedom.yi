import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import routerPath from '../../config/router-config';
import renderRoutes from '../../router/renderRoutes';

const Header: React.FC = (props: RouteComponentProps | any): React.ReactElement => {
  const { route } = props;
  // console.log('props', props);
  return (
    <>
      <div>
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
      </div>
      <div>
        {renderRoutes(route.children)}
      </div>
    </>
  );
};

export default Header;
