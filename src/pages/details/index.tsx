import * as React from 'react';

import priceUrl from './images/price.png';
import redEnvelopeUrl from './images/red-envelope.png';
import './index.css';


function Details() {
  return (
    <div className="wrapper">
      <div className="content">
        <span className="bottom" />
        <span className="imgs1">
          <img src={redEnvelopeUrl} alt="121" />
          <span className="text1">悬赏</span>
        </span>
        <span className="mask-img">
          <img src={priceUrl} alt="111" />
        </span>
      </div>
    </div>
  );
}

export default Details;
