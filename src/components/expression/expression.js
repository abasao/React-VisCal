import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Row from './expression-row';

const mapStateToProps = state => ({
  // targetCol: { ...state.historyState.targetId },
  history: { ...state.historyState },
  target: state.historyState.targetId,
  expression: { ...state.expressionState },
  expCol: { ...state.expressionState.expressionCollection }
});

class ExpressionComponent extends Component {
  hist = e => console.log(this.props.expCol);
  expressionRender = (expCollection, colId) => {
    if (!colId) return null;
    return (
      <Fragment>
        {Object.keys(expCollection)
          .filter(Key => Key !== this.props.target)
          .map(Key => (
            <Row expression={expCollection[Key]} key={Key} />
          ))}
      </Fragment>
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.hist}>History</button>
        {this.expressionRender(this.props.expCol.byId, this.props.expCol.colId)}
        {/* <Row
          col={this.props.expCol.colId}
          expRow={this.props.expCol.byId['col_0']}
        />
        <Row
          col={this.props.expCol.colId}
          expRow={this.props.expCol.byId['col_0']}
        />
        <Row
          col={this.props.expCol.colId}
          expRow={this.props.expCol.byId['col_0']}
        /> */}
      </div>
    );
  }
}
export default connect(mapStateToProps)(ExpressionComponent);
