import { ADD, LOWER } from './type';

const initialCount = {
  count: 0,
};

const countReducer = (state = initialCount, action: { type: any; count: number; }) => {
  switch (action.type) {
    case ADD:
      return {
        count: state.count + action.count,
      };
    case LOWER:
      return {
        count: state.count - action.count,
      };
    default:
      return state;
  }
};

export {
  countReducer, initialCount,
};
