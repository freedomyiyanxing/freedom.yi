import * as React from 'react';
import img1 from '@assets/images/sidebar-2.d30c9e30.jpg';

import { bgStyles } from './style';

const SidebarBg: React.FC = (): React.ReactElement => {
  const classes = bgStyles({
    images: img1,
  });
  return (
    <div
      className={classes.bgContainer}
    />
  );
};

export default SidebarBg;
