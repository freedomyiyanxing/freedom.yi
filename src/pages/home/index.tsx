import * as React from 'react';

const Home: React.FC = (): React.ReactElement => {
  console.log('111111');
  return (
    <div>
      <span>测试提交到 eslint 分支</span>
      <span>测试合并分支 到 master</span>
      <span>再次测试 新建分支</span>
      <p>测试 合并 分支问题</p>
      <span>测试 test 分支提交1</span>
      <div>
        eslint: 分支122
      </div>
      <p>是否能阻止不符合eslint规则的提交</p>
      <span>再次测试 test 分支1</span>
    </div>
  );
};

export default Home;
