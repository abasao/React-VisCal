import React, { Component } from 'react';
class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className={'control flex-col control-style btn-style cursor'}>
          <div className={'control--row flex'}>
            <div
              className={'margin-h btn-value btn-top btn-style'}
              onClick={'undoEvent'}
            >
              {' '}
              <i className={'fas fa-eraser'} />
            </div>
            <div className={'margin-h btn-value btn-top btn-style cancel'}>
              <i className={'fas fa-trash-alt'} />
            </div>
            <div
              className={'margin-h btn-value btn-top btn-style accept'}
              onClick={'enterEvent'}
            >
              {' '}
              <i className={'fas fa-check'} />
            </div>
          </div>
          <div className={'control--row flex-col'}>
            <div className={'flex'}>
              <div
                className={
                  'control--btn margin-h margin-v btn-style flex ' + 'expand()'
                }
                onClick={"btnClick('expand', $event)"}
              >
                <span className={'btn-value'}>
                  <i className={'fas fa-expand'} />
                </span>
              </div>
              <div
                className={
                  'control--btn margin-h margin-v btn-style flex ' +
                  'compress()'
                }
                onClick={"btnClick('compress', $event)"}
              >
                <span className={'btn-value'}>
                  <i className={'fas fa-compress'} />
                </span>
              </div>
              <div
                className={'control--btn margin-h margin-v btn-style flex'}
                onClick={"btnClick('highlight', $event)"}
              >
                <span className={'btn-value'}>
                  <i className={'far fa-lightbulb'} />
                </span>
              </div>
            </div>
            <div className={'flex'}>
              <div
                className={'control--btn margin-h margin-v btn-style flex'}
                onClick={"btnClick('×', $event)"}
              >
                <span className={'btn-value'}>×</span>
              </div>
              <div
                className={'control--btn margin-h margin-v btn-style flex'}
                onClick={"btnClick('÷', $event)"}
              >
                <span className={'btn-value'}>÷</span>
              </div>
              <div
                className={
                  'control--btn margin-h margin-v btn-style flex ' +
                  'parenthesesState()'
                }
                onClick={"btnClick('(  )', $event)"}
              >
                <span className={'btn-value'}>( )</span>
              </div>
              <div
                className={'control--btn margin-h margin-v btn-style flex'}
                onClick={"btnClick('^', $event)"}
              >
                <span className={'btn-value'}>
                  <i className={'fas fa-superscript'} />
                </span>
              </div>
            </div>
            <div className={'flex'}>
              <div
                className={'control--btn margin-h margin-v btn-style flex'}
                onClick={"btnClick('7', $event)"}
              >
                <span className={'btn-value'}>7</span>
              </div>
              <div
                className={'control--btn margin-h margin-v btn-style flex'}
                onClick={"btnClick('8', $event)"}
              >
                <span className={'btn-value'}>8</span>
              </div>
              <div
                className={'control--btn margin-h margin-v btn-style flex'}
                onClick={"btnClick('9', $event)"}
              >
                <span className={'btn-value'}>9</span>
              </div>
              <div
                className={'control--btn margin-h margin-v btn-style flex'}
                onClick={"btnClick('−', $event)"}
              >
                <span className={'btn-value'}>−</span>
              </div>
            </div>
            <div className={'flex'}>
              <div
                className={'control--btn margin-h margin-v btn-style flex'}
                onClick={"btnClick('4', $event)"}
              >
                <span className={'btn-value'}>4</span>
              </div>
              <div
                className={'control--btn margin-h margin-v btn-style flex'}
                onClick={"btnClick('5', $event)"}
              >
                <span className={'btn-value'}>5</span>
              </div>
              <div
                className={'control--btn margin-h margin-v btn-style flex'}
                onClick={"btnClick('6', $event)"}
              >
                <span className={'btn-value'}>6</span>
              </div>
              <div
                className={'control--btn margin-h margin-v btn-style flex'}
                onClick={"btnClick('+', $event)"}
              >
                <span className={'btn-value'}>+</span>
              </div>
            </div>
            <div className={'flex'}>
              <div
                className={'control--btn margin-h margin-v btn-style flex'}
                onClick={"btnClick('1', $event)"}
              >
                <span className={'btn-value'}>1</span>
              </div>
              <div
                className={'control--btn margin-h margin-v btn-style flex'}
                onClick={"btnClick('2', $event)"}
              >
                <span className={'btn-value'}>2</span>
              </div>
              <div
                className={'control--btn margin-h margin-v btn-style flex'}
                onClick={"btnClick('3', $event)"}
              >
                <span className={'btn-value'}>3</span>
              </div>
              <div
                className={'control--btn margin-h margin-v btn-style flex'}
                onClick={"btnClick('0', $event)"}
              >
                <span className={'btn-value'}>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Control;
