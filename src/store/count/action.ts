import { ADD, LOWER } from './type';

const add = (count: number) => ({
  type: ADD,
  count,
});

const lower = (count: number) => ({
  type: LOWER,
  count,
});

export {
  lower,
  add,
};
