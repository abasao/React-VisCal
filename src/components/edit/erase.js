import React from 'react';
const EraseComponent = ({ nonZero = 0, eHandler }) => {
  return (
    <span
      className={nonZero ? 'btn-style btn-top' : 'btn-style btn-top opac3'}
      style={{ padding: '0 6px' }}
      onClick={eHandler}
    >
      <i className={'fas fa-eraser'} />
    </span>
  );
};

export default EraseComponent;
