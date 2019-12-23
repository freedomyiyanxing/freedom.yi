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
];

export default routerPath;
