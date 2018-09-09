import { createBlock, createNumber } from './number';
import methods from './methods';
export default (createExp, { index }) => {
  //   console.log(createExp.slice(-1)[0].hasOwnProperty('value'));
  if (createExp.slice(-1)[0].hasOwnProperty('content')) {
    return {
      createExpression: [...filterEmpty(createExp)],
      selected: false
    };
  } else {
    return {
      createExpression: [
        ...filterEmpty(createExp),
        new createBlock({ op: methods.randSign(1, -0.25) })
      ],
      selected: index
    };
  }
};

export const filterEmpty = createExp => {
  return createExp.filter(x => x.hasOwnProperty('value') || x.content.length);
};
