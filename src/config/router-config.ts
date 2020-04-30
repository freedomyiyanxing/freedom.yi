import uuid from 'uuid';

export interface IPath {
  id: string
  text: string
  path: string
  children?: any
}

const routerPath: IPath[] = [
  {
    text: '首页',
    path: '/home',
    id: uuid(),
  },
  {
    text: '详情页',
    path: '/details',
    id: uuid(),
  },
  {
    text: '换皮肤',
    path: '/select-skin',
    id: uuid(),
  },
  {
    text: 'Css',
    path: '/css',
    id: uuid(),
  },
  {
    text: 'Map',
    path: '/map',
    id: uuid(),
  },
];

export default routerPath;
