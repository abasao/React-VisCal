import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBlockAction } from '../../actions/create/createBlockAction';
import { createNumberAction } from '../../actions/create/createNumberAction';
import { enterAction } from '../../actions/edit/enterAction';
import { eraseAction } from '../../actions/edit/eraseAction';

import Button from '../math/button';
import Container from '../math/button-container';
import Fraction from '../math/fraction';
import Term from '../math/term';
import Enter from '../edit/enter';
import Erase from '../edit/erase';
import ExpressionCreatorRow from './expression-creator-row';

const flexStyle = { display: 'flex', alignItems: 'center' };
// const fraction = {
//   ...flexStyle,
//   'flex-direction': 'column',
//   'justify-content': 'space-between'
// };

const mapStateToProps = state => ({
  create: { ...state.createState },
  expression: [...state.createState.createExpression],
  selected: state.createState.selected,
  last: state.createState.createExpression.slice(-1)[0]
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
    if (!this.props.expression[0]) return;
    if (
      this.props.last.hasOwnProperty('content') &&
      !this.props.last.content[0]
    )
      return null;
    this.props.createNumberAction({ multi: true });
  }
  createBlock() {
    const selected = this.props.selected || this.props.expression.length || 0;
    this.props.createBlockAction({ index: selected });
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
  notEmpty = () => this.props.last;
  hasValue = () => this.props.last.hasOwnProperty('value');
  hasContent = () => this.props.last.content.length;
  showMulti = () => {
    return this.notEmpty() && (this.hasValue() || this.hasContent());
  };
  render() {
    return (
      <div>
        <div className={'math margin-v'} style={{ marginBottom: '15px' }}>
          <Container customStyle={flexStyle}> {'Select'} </Container>
          <Container customStyle={flexStyle}>
            <Button eHandler={this.createNumber.bind(this)} value={'± 2'} />
            <Button
              eHandler={this.createMultiple.bind(this)}
              value={'× 3'}
              className={this.showMulti() ? '' : 'opac3'}
            />
            <Button
              eHandler={this.createBlock.bind(this)}
              value={'(4+5)'}
              className={this.props.selected !== false ? 'highlight' : ''}
            />
            <div onClick={() => console.log('clicked')} className={'flex'}>
              <Fraction>
                <Container>
                  <Term expression={{ op: '±', value: 6 }} index={1} />
                </Container>
                <Container>
                  <Term expression={{ op: '±', value: 7 }} index={1} />
                </Container>
              </Fraction>
            </div>
          </Container>
          <Container customStyle={flexStyle}>
            <Enter nonZero={this.notEmpty()} eHandler={this.enter} />
            <Erase nonZero={this.notEmpty()} eHandler={this.erase} />
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
