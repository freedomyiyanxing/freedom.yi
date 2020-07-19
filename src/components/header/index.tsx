import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Sidebar from '@components/sidebar/sidebar';
import renderRoutes from '@router/renderRoutes';

import useStyles from './header-css';

const Header: React.FC = (props: RouteComponentProps | any): React.ReactElement => {
  const classes = useStyles();
  const { route } = props;
  return (
    <div className={classes.container}>
      <Paper className={classes.left} square elevation={3}>
        <Sidebar />
      </Paper>
      <div className={classes.right}>
        <div className={classes.section}>{renderRoutes(route.children)}</div>
        <div className={classes.footer}>
          <a target="_blank" href="http://www.beian.gov.cn">湘ICP备20005553号</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
