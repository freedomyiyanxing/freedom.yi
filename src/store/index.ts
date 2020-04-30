import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { userReducer, initialUserInfo } from '@store/user-info/reducer';
import { countReducer, initialCount } from '@store/count/reducer';
import { add, lower } from '@store/count/action';

const allReducer = combineReducers({
  user: userReducer,
  count: countReducer,
});

const allInitial = {
  user: initialUserInfo,
  count: initialCount,
};

// @ts-ignore
const store = createStore(allReducer, allInitial, applyMiddleware(ReduxThunk));


// store.dispatch(setName('易炎星'));

store.subscribe(() => {
  console.log('监听 redux 发生变化', store.getState().count);
});

function addAsync(num: number) {
  return (dispatch: (arg0: { type: string; count: number; }) => void) => {
    setTimeout(() => {
      dispatch(add(num));
    }, 3000);
  };
}


// store.dispatch(addAsync(100));

// store.dispatch(add(1));
// store.dispatch(add(1));
// store.dispatch(add(1));

// store.dispatch(lower(1));

export default store;
