import React from 'react';
import uuid from 'uuid';

import Header from '@components/header';
import Home from '@pages/home';
import Details from '@pages/details';
import SelectSkin from '@pages/select-skin/select-skin';
import Css from '@pages/css';
import Map from '@pages/map';

export interface IRoutesItems {
  path: string,
  key: string,
  exact?: boolean,
  component: React.FC,
  children?: any,
}

const routers: IRoutesItems[] = [
  {
    path: '/',
    key: uuid(),
    exact: true,
    component: Header,
    children: [
      {
        path: '/home',
        key: uuid(),
        component: Home,
      },
      {
        path: '/details',
        key: uuid(),
        component: Details,
      },
      {
        path: '/select-skin',
        key: uuid(),
        component: SelectSkin,
      },
      {
        path: '/css',
        key: uuid(),
        component: Css,
      },
      {
        path: '/map',
        key: uuid(),
        component: Map,
      },
    ],
  },
];

export default routers;
