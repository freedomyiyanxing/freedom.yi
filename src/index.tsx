import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import routers from '@router/index';
import renderRoutes from '@router/renderRoutes';
import { ThemeProvider } from '@material-ui/core/styles';
import store from '@store/index';

import { theme } from '@config/theme';
import '@assets/style/reset.css';

const root = document.getElementById('root');

const App: React.FC = (): React.ReactElement => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {renderRoutes(routers)}
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(<App />, root);
