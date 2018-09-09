import React, { Component } from 'react';
class Parentheses extends Component {
  constructor(props) {
    super(props);
    this.state = { left: this.props.par[0], right: this.props.par[1] };
  }
  componentDidMount() {
    // console.log('child: ', this.props.children);
  }
  render() {
    return (
      <div className={'flex margin-h'}>
        {this.state.left ? '(' : ''}
        {this.props.children}
        {this.state.right ? ')' : ''}
      </div>
    );
  }
}

export default Parentheses;
