import React, { Component } from 'react';
//comment
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberArray: this.props.numArray,
      parentheses: this.props.parentheses
    };
  }
  componentDidMount() {
    this.props.numArray[0].value = 9;
  }
  static getDerivedStateFromProps(args) {
    console.log(args);
  }
  //move this to util
  opFilter(r = ['index', 'operator']) {
    if (r[0] === 0) {
      return r[1] === '-' ? '−' : '';
    }
    let operator = false;
    switch (r[1]) {
      case '*':
        operator = '×';
        break;
      case '/':
        operator = '÷';
        break;
      case '+':
        operator = '+';
        break;
      case '-':
        operator = '−';
        break;

      default:
        operator = '×';
        break;
    }
    return operator ? operator : '';
  }
  realValue(value) {
    if (value !== false) return value;
    return '';
  }
  withParentheses(n, i) {
    return (
      <div className={'flex'}>
        <span>{this.opFilter([i, n.op])}</span>(
        {n.nested.map((p, k) => this.withoutParentheses(p, k))}
        <span
          className={'flex' + this.state.parentheses ? 'opac3 margin-h' : ''}
        >
          )
        </span>
      </div>
    );
  }
  withoutParentheses(n, i) {
    return (
      <div className="flex">
        <span>{this.opFilter([i, n.op])}</span>
        {this.realValue(n.value)}
      </div>
    );
  }
  numberArray(n, i) {
    return (
      <div className={'flex'} key={i}>
        {!n.parentheses
          ? this.withoutParentheses(n, i)
          : this.withParentheses(n, i)}
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className={'math cursor control preview-style flex'}>
          {this.state.numberArray.map((n, i) => this.numberArray(n, i))}
        </div>
      </div>
    );
  }
}

export default Edit;
