import React, { Component, Fragment } from 'react';
import Container from '../math/button-container';
import Term from '../math/term';
import Fraction from '../math/fraction';

class ExpressionRow extends Component {
  findExp = (root, exp) => {
    return root.nested.map(x => exp[x]);
  };
  mapToFraction = exp => {
    return (
      <Fragment>
        <Fraction>
          {exp.map((x, i) => (
            <Container>
              <Term expression={x} index={i} key={x.id} />
            </Container>
          ))}
        </Fraction>
      </Fragment>
    );
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
    // return this.mapToTerm(expArray);
    return this.mapToFraction(expArray);
  };
  render() {
    return (
      <div className={'math margin-v'}>
        {/* <Container>{this.displayExpression(this.props.expression)}</Container> */}
        <Container>{this.displayExpression(this.props.expression)}</Container>
      </div>
    );
  }
}
export default ExpressionRow;
