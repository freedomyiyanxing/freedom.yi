import { UP_DATA_NAME, UP_DATA_AGE } from './type';

const setName = (name: string) => ({
  type: UP_DATA_NAME,
  user: {
    name,
  },
});

const setAge = (age: number) => ({
  type: UP_DATA_AGE,
  user: {
    age,
  },
});

export {
  setName,
  setAge,
};
