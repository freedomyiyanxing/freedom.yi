import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routers from './router/index';
import renderRoutes from './router/renderRoutes';

import './base/style/reset.css';

const root = document.getElementById('root');

const App: React.FC = (): React.ReactElement => (
  <BrowserRouter>
    {renderRoutes(routers)}
  </BrowserRouter>
);

ReactDOM.render(<App />, root);
