import React, { Component } from 'react';
import Parentheses from './parentheses';

class NumberComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // console.log('Num: ', this.props);
  }
  renderValue(hasValue) {
    if (!hasValue) return;
    return (
      <div className={'math--object'}>
        <div className={'object-value object-margin'} />
        {this.props.number.value}
      </div>
    );
  }
  renderOp(op, i) {
    if (op === '-' || i !== 0)
      return <div className={'object-value'}> {op} </div>;
  }
  render() {
    // return <div>l</div>;
    return (
      <div className={!this.props.root ? 'item-style' : undefined}>
        {this.renderValue(this.props.number.value)}
        {!this.props.number.value && (
          <div className={'flex'}>
            {/* parenthesesComponent */}
            <Parentheses par={[true, true]}>
              <div className={'flex'}>
                {this.props.number.nested.map((n, i) => (
                  <div className={'flex'} key={i}>
                    {this.renderOp(n.op, i)}
                    <NumberComponent number={n} root={false} />
                  </div>
                ))}
              </div>
            </Parentheses>
          </div>
        )}
      </div>
    );
  }
}

export default NumberComponent;
