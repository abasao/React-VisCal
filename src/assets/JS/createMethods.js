import { createBlock } from './number';
import methods from './methods';
export default (createExp, { selected }, { index }) => {
  if (createExp.length && selected !== false) {
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
