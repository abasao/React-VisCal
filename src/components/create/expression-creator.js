import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBlockAction } from '../../actions/create/createBlockAction';
import { createNumberAction } from '../../actions/create/createNumberAction';
import { enterAction } from '../../actions/edit/enterAction';
import { eraseAction } from '../../actions/edit/eraseAction';

import Button from '../math/button';
import Container from '../math/button-container';
import Enter from '../edit/enter';
import Erase from '../edit/erase';
import ExpressionCreatorRow from './expression-creator-row';

const flexStyle = { display: 'flex', alignItems: 'center' };
const fraction = {
  ...flexStyle,
  'flex-direction': 'column',
  'justify-content': 'space-between'
};

const mapStateToProps = state => ({
  create: { ...state.createState },
  expression: [...state.createState.createExpression],
  target: state.createState.selected
});

const mapDispatchToProps = dispatch => ({
  createBlockAction: block => dispatch(createBlockAction(block)),
  createNumberAction: number => dispatch(createNumberAction(number)),
  enterAction: (expression, genExp) =>
    dispatch(enterAction(expression, genExp)),
  eraseAction: erase => dispatch(eraseAction(erase))
});

class ExpressionCreator extends Component {
  createNumber() {
    this.props.createNumberAction({ add: true });
  }
  createMultiple() {
    this.props.createNumberAction({ multi: true });
  }
  createBlock() {
    const target = this.props.target || this.props.expression.length;
    this.props.createBlockAction({ index: target });
  }
  enter = () => {
    this.props.enterAction(
      this.props.expression,
      this.props.create.genExpression
    );
  };
  erase = () => {
    this.props.eraseAction(true);
  };
  render() {
    return (
      <div>
        <div className={'math margin-v'} style={{ marginBottom: '15px' }}>
          <Container customStyle={flexStyle}> {'Select'} </Container>
          <Container customStyle={flexStyle}>
            <Button eHandler={this.createNumber.bind(this)} value={'± 2'} />
            <Button eHandler={this.createMultiple.bind(this)} value={'× 3'} />
            <Button
              eHandler={this.createBlock.bind(this)}
              value={'(4+5)'}
              className={this.props.target ? 'highlight' : ''}
            />
          </Container>
          <Container customStyle={flexStyle}>
            <Enter
              nonZero={this.props.expression.length}
              eHandler={this.enter}
            />
            <Erase
              nonZero={this.props.expression.length}
              eHandler={this.erase}
            />
          </Container>
        </div>
        <ExpressionCreatorRow />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpressionCreator);
