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
      <span>再次测试 新建分支</span>
      <p>测试 合并 分支问题</p>
      <span>测试 test 分支提交1</span>
      <div>
        test: 分支
      </div>
      <Home />
    </div>
  )
};

ReactDOM.render(<App />, root);
