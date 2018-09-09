import React, { Component } from 'react';
import Expression from './components/expression/expression';
import ExpressionCreator from './components/create/expression-creator';

const style = {
  width: '500px',
  height: '150px',
  margin: '0 auto',
  paddingTop: '10px',
  backgroundColor: '#ddd',
  borderRadius: '5px'
};

class App extends Component {
  render() {
    return (
      <div className={'app'}>
        <div className={'container'} style={style}>
          <ExpressionCreator />
        </div>
        <Expression />
      </div>
    );
  }
}

export default App;
