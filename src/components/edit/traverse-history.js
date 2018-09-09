import React, { Component, Fragment } from 'react';
import Row from '../expression/expression-row';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  // history: { ...state.history },
  // targetId: { ...state.history.targetId },
  // expColId: { ...state.expressionState.expressionCollection.byId }
});

class Traverse extends Component {
  render() {
    if (!this.props.targetId) return null;
    const id = this.props.targetId;
    return (
      <Fragment>
        <div className={'flex'}>
          <button>OK</button>
          <button>X</button>
        </div>
        <span className={'flex'}>
          <button>{'<-'}</button>
          <Row col={id} expRow={this.props.expColId[id]} />
          <button>{'->'}</button>
        </span>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(Traverse);
