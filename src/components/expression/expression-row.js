import React, { Component, Fragment } from 'react';
import Container from '../math/button-container';
import Term from '../math/term';

class ExpressionRow extends Component {
  findExp = (root, exp) => {
    return root.nested.map(x => exp[x]);
  };
  mapToTerm = exp => {
    return (
      <Fragment>
        {exp.map((x, i) => (
          <Term expression={x} index={i} key={x.id} />
        ))}
      </Fragment>
    );
  };
  displayExpression = exp => {
    const expArray = this.findExp(exp.exp_0, exp);
    return this.mapToTerm(expArray);
  };
  render() {
    return (
      <div className={'math margin-v'}>
        <Container>{this.displayExpression(this.props.expression)}</Container>
      </div>
    );
  }
}
export default ExpressionRow;
