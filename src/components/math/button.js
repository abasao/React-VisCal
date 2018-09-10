import React from 'react';
const style = {
  padding: '0 6px'
};
const button = ({ value, customStyle = style, eHandler, className }) => {
  return (
    <div className={'item-style object-margin math--object'}>
      <div
        onClick={eHandler}
        style={customStyle}
        className={'object-value ' + className}
      >
        {value}
      </div>
    </div>
  );
};

export default button;
