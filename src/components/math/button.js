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
/* 
<div style={customStyle} className={'object-value'}>
  <div className={'math--object'}>
    <div className={'object-value object-margin'}>{value}</div>
  </div>
</div> 
*/
export default button;
