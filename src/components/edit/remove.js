import React from 'react';
const EraseComponent = ({ eHandler }) => {
  return (
    <span
      className={'btn-style btn-top cancel'}
      style={{ padding: '2px 6px' }}
      onClick={eHandler}
    >
      <i className={'fas fa-trash-alt'} />
    </span>
  );
};

export default EraseComponent;
