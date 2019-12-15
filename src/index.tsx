import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from './pages/home/index';

const root = document.getElementById('root');

const App: React.FC = () => {
  console.log('2222');
  return (
    <div>
      <span>这是3331</span>
      <Home />
    </div>
  )
};

ReactDOM.render(<App />, root);
