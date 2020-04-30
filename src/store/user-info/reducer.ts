import { UP_DATA_AGE, UP_DATA_NAME } from '@store/user-info/type';

const initialUserInfo = {
  name: 'yiyanxing',
  age: 18,
};

const userReducer = (
  state = initialUserInfo, action: { type: any; user: { name?: string; age?: number; }; },
) => {
  switch (action.type) {
    case UP_DATA_AGE:
      return {
        ...state,
        age: action.user.age,
      };
    case UP_DATA_NAME:
      return {
        ...state,
        age: action.user.name,
      };
    default: {
      return state;
    }
  }
};

export {
  userReducer,
  initialUserInfo,
};
