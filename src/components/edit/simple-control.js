import React, { Component } from 'react';

class SimpleControl extends Component {
  render() {
    return (
      <div className={'control flex-col control-style btn-style cursor'}>
        <div className={'control--row flex-col'}>
          <div className={'flex'}>
            <div className={'control--btn margin-h margin-v btn-style flex '}>
              <span className={'btn-value'}>[n]</span>
            </div>
            <div className={'control--btn margin-h margin-v btn-style flex '}>
              <span className={'btn-value'}>[block]</span>
            </div>
            <div className={'control--btn margin-h margin-v btn-style flex '}>
              <span className={'btn-value'}>[+-]</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleControl;
