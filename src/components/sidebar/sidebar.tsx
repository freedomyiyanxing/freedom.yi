import * as React from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import routerPath from '@config/router-config';
import {
  themeOrange,
  // themeYellow,
  // themeGreen,
  // themeRed,
} from '@config/theme';
import SidebarBg from './sidebar-bg';

import { useStyles } from './style';

const Sidebar: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={themeOrange}>
      <div className={classes.container}>
        <div className={classes.root}>
          {
            routerPath.map((item) => (
              <Link
                style={{ display: 'flex' }}
                className={classes.navItem}
                key={item.id}
                to={item.path}
              >
                {item.text}
              </Link>
            ))
          }
        </div>
        <SidebarBg />
      </div>
      <div className={classes.fixedPlugin}>
        hah
      </div>
    </ThemeProvider>
  );
};

export default Sidebar;
