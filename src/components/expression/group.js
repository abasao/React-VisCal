import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Term from '../math/term';

const mapStateToProps = state => ({
  //   targetCol: { ...state.historyState.targetId },
  //   expression: { ...state.expressionState },
  //   expCol: { ...state.expressionState.expressionCollection }
});

class GroupComponent extends Component {
  //Should see if group is Term, fraction or parentheses
  isFraction = groupArray => groupArray.some(x => x.op === '/');
  isParentheses = groupArray => groupArray.some(this.isPlusOrMinus);
  isTerm = obj => !(obj.nested.length || obj.content.length);
  isPlusOrMinus = obj => obj.op === '+' || obj.op === '-';
  groupReducer = (acc, current) => {
    if (this.isPlusOrMinus(current)) {
      acc.push([current]);
    } else {
      acc.slice(-1)[0].push(current);
    }
    return acc;
  };
  GroupRender = group => {
    return null;
  };
  render() {
    return <Fragment>{this.GroupRender()}</Fragment>;
  }
}
export default connect(mapStateToProps)(GroupComponent);
