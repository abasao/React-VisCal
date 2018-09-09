import { Num } from './number';
import mod from './methods';
import update from 'immutability-helper';

//An array is created with a barebones object, it's then mapped to
//another object with more properties called Num,
//collection of Nums are in turn expressions.

export default (expressionCollection, createArray, genArray) => {
  if (!createArray.length) return expressionCollection;
  const { byId, colId } = expressionCollection;
  return {
    ...expressionCollection,
    colId: colId + 1,
    byId: { ...byId, ...createExpression(colId, createArray, genArray) }
  };
};

function createExpression(colId, createArray, genArray) {
  const newRow = initRow(colId);
  const setExpression = setRowExpressions(newRow, colId);
  const getExpId = generateExpressionId();
  let n = setExpression(new Num({ id: getExpId() }));
  n.setRoot().setParentId('col_' + colId);
  n.nested = Generator(genArray, setExpression, getExpId, n.id);
  return newRow;
}

const Generator = (genArray, setExpression, getExpId, parId) => {
  return genArray.map(x => {
    return setExpression(
      new Num({
        ...x(true),
        id: getExpId()
      })
    ).setParentId(parId).id;
  });
};

const setRowExpressions = (Row, colId) => {
  const col_ = 'col_' + colId;
  return exp => {
    Row[col_].expId++;
    Row[col_][exp.id] = exp;
    return exp;
  };
};

const initRow = colId => {
  return {
    ['col_' + colId]: {
      changes: 0,
      expId: 1,
      exp_0: {}
    }
  };
};

function generateExpressionId(expId = 0) {
  return () => 'exp_' + expId++;
}
