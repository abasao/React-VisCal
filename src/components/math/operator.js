import React from 'react';
const style = {
  padding: '0 4px'
};
function translate(s) {
  switch (s) {
    case '+':
      return s;
    case '-':
      return '−';
    case '/':
      return '÷';
    case '*':
      return '×';
    default:
      return s;
  }
}
const sign = ({ value, customStyle = style, eHandler, index = 0 }) => {
  if (!index && value !== '-') return null;
  const opacity = !index && value === '-' ? 'opac3' : '';
  return (
    <div className={'item-style object-margin math--object ' + opacity}>
      <div onClick={eHandler} style={customStyle} className={'object-value'}>
        {translate(value)}
      </div>
    </div>
  );
};
export default sign;
