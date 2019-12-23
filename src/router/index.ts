import React from 'react';
import uuid from 'uuid';

import Header from '../components/header';
import Home from '../pages/home';
import Details from '../pages/details';

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
    component: Header,
    children: [
      {
        path: '/home',
        exact: true,
        key: uuid(),
        component: Home,
      },
      {
        path: '/details',
        exact: true,
        key: uuid(),
        component: Details,
      },
    ],
  },
];

export default routers;
