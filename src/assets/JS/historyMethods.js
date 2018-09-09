import { update } from 'immutability-helper';
//maintain only last 10 updates, discard older
update.extend('$LIFO', function(expression, original) {
  return [expression, ...original.filter((x, i) => i >= 9)];
});

export default history => {
  return history;
};
//saved on every 10th change, max of 10 slots available
export const archive = recent => {
  return recent;
};

//saved every single change, max of 10 slots available
export const saveRecent = (expression, current) => {
  return expression;
};
