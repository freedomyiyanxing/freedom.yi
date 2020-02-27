import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routers from '@router/index';
import renderRoutes from '@router/renderRoutes';
import { ThemeProvider } from '@material-ui/core/styles';

import { theme } from '@config/theme';
import '@base/style/reset.css';

const root = document.getElementById('root');


const App: React.FC = (): React.ReactElement => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      {renderRoutes(routers)}
    </BrowserRouter>
  </ThemeProvider>
);

ReactDOM.render(<App />, root);
