import React, {
  useEffect, useRef, forwardRef,
} from 'react';

import './index.css';

interface IProps {
  hh: string
}

const Child = forwardRef((
  props: IProps, refs,
) => {
  useEffect(() => {
    console.log('我是 child', refs, props.hh);
  }, []);

  return (
    // @ts-ignore
    <div ref={refs} key="aa">
      aa
    </div>
  );
});

const Details: React.FC = (): React.ReactElement => {
  const myRef = useRef();

  useEffect(() => {
    console.log(myRef.current);
  }, []);

  return (
    <div className="wrapper">
      <div className="content">
        <Child ref={myRef} hh="11" />
      </div>
    </div>
  );
};

export default Details;
