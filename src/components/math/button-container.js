import React, { Component } from 'react';

const buttonContainer = ({ children, customStyle = {} }) => {
  return (
    <div className={'term-flex term-style cursor'}>
      <div className={'object-style margin-h flex'} style={customStyle}>
        {children}
      </div>
    </div>
  );
};

export default buttonContainer;
