import React, { Fragment } from 'react';
import Operator from './operator';
import Button from './button';
const term = ({ expression, index, eHandler }) => {
  // if (!expression.length) return null;
  return (
    <Fragment>
      <Operator value={expression.op} index={index} />
      <Button value={expression.content || expression.value} />
    </Fragment>
  );
  // return expression.map((obj, i) => (
  //   <Fragment key={obj.id || i}>
  //     <Operator value={obj.op} index={i} />
  //     <Button value={obj.content || obj.value} />
  //   </Fragment>
  // ));
};

export default term;
