import React from 'react';
const EnterComponent = ({ nonZero = 0, eHandler }) => {
  return (
    <span
      className={nonZero ? 'btn-style btn-top accept' : 'btn-style btn-top'}
      style={{ padding: '0 6px' }}
      onClick={eHandler}
    >
      <i className={'fas fa-check'} />
    </span>
  );
};

export default EnterComponent;
