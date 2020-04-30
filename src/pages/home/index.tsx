import React, {
  ChangeEvent,
  useState,
  useReducer,
  useEffect,
  useLayoutEffect, forwardRef, useCallback, useMemo,
} from 'react';
import { connect } from 'react-redux';
import { UP_DATA_NAME } from '@store/user-info/type';

interface IProps {
  user: {
    name: string,
    age: number,
  };
  setNames: (name: string) => void;
}

const reducers = (state: number, action: any) => {
  console.log(action);
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'lower':
      return state - 1;
    default:
      return state;
  }
};

// @ts-ignore
const Home: React.FC = (props: IProps): React.ReactElement => {
  // eslint-disable-next-line no-shadow
  const { user, setNames } = props;
  // console.log(props);
  // const [count, setCount] = useState<number>(0);
  // const [name, setName] = useState<string>('freedom.yi');
  // const [count, dispatchCount] = useReducer(reducers, 0);
  // dom 更新前触发
  // useLayoutEffect(() => {
  //   console.log(1);
  //   return () => {
  //     console.log(22);
  //   };
  // }, []);

  // dom 更新后触发
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount((c) => c + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  // 依赖count 在count没有发生变化时 保证返回的一定之前的config对象
  // const config = useMemo(() => ({
  //   count,
  // }), [count]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setNames(name);
  };

  // 依赖count 在count没有发生变化时 保证返回的一定之前的方法, 而不是重新创建的
  // const handleCountClick = useCallback(() => {
  //   dispatchCount({ type: 'add' });
  // }, [count]);

  return (
    <div>
      <div>
        <h2>Redux</h2>
        <div>
          <span>name: </span>
          <span>{user.name}</span>
        </div>
        <div>
          <span>age: </span>
          <span>{user.age}</span>
        </div>
      </div>
      <div>
        <input
          style={{ border: '1px solid red', height: 38 }}
          type="text"
          value={user.name}
          onChange={handleNameChange}
        />
        { /* <Child handleClick={handleCountClick} config={config} /> */}
      </div>
    </div>
  );
};

const Child = React.memo((props: { handleClick: () => void; config: { count: number }; }) => {
  console.log('我是 child');
  const { handleClick, config } = props;
  return (
    <button type="button" onClick={handleClick}>{config.count}</button>
  );
});

export default connect(
  // @ts-ignore
  ({ user }) => ({
    user,
  }),
  (dispatch) => ({
    setNames: (name: string) => dispatch({
      type: UP_DATA_NAME,
      user: {
        name,
      },
    }),
  }),
)(Home);
