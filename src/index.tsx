import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from './pages/home/index';

const root = document.getElementById('root');

const App: React.FC = () => {
  console.log('2222');
  return (
    <div>
      <span>测试提交到 eslint 分支</span>
      <span>测试合并分支 到 master</span>
      <Home />
    </div>
  )
};

ReactDOM.render(<App />, root);
