import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { removeAction } from '../../actions/edit/removeBlockAction';

import Remove from '../edit/remove';
import Container from '../math/button-container';
import Operator from '../math/operator';
import Term from '../math/term';

const mapStateToProps = state => ({
  createState: { ...state.createState },
  expression: [...state.createState.createExpression]
});

const mapDispatchToProps = dispatch => ({
  removeAction: remove => dispatch(removeAction(remove))
});

class ExpressionCreatorRow extends Component {
  createBlock({ target }) {
    console.log('createblock');
  }
  remove = () => {
    this.props.removeAction(true);
  };
  numberRender = (n, i) => {
    // console.log(n);
    return <Term expression={n} index={i} key={i} />;
  };
  contentRender = contentArray => {
    if (!contentArray.length) return null;
    return (
      <Fragment>
        {contentArray.map((x, i) => {
          return x.hasOwnProperty('value')
            ? this.numberRender(x, i)
            : this.blockRender(x, i);
        })}
      </Fragment>
    );
  };
  blockRender = (block, i) => {
    //both number/container renders receive, the appropriate one returns
    //onClick container becomes target, can take numbers as children
    //then it returns numberRender through a map
    return (
      <Fragment key={i}>
        <Operator value={block.op} index={i} />
        {this.contentRender(block.content)}
      </Fragment>
    );
  };
  createMapper = expression => {
    if (!expression.length) return null;
    return this.props.expression.map((x, i) => {
      return x.hasOwnProperty('value')
        ? this.numberRender(x)
        : this.blockRender(x);
    });
  };

  render() {
    if (!this.props.expression.length) return null;

    return (
      <div className={'math margin-v'}>
        <Container customStyle={{}}>
          {this.contentRender(this.props.expression)}
        </Container>
        <Remove eHandler={this.remove} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpressionCreatorRow);
