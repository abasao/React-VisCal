import React, { Component, Fragment } from 'react';
const Parentheses = ({ children = null, left = false, right = false }) => {
  return (
    <Fragment>
      {/* {left ? '(' : ''} */}({children}){/* {right ? ')' : ''} */}
    </Fragment>
  );
};

export default Parentheses;
// class Parentheses extends Component {
//   render() {
//     return (
//       <div className={'flex margin-h'}>
//         {this.props.left ? '(' : ''}
//         {this.props.children}
//         {this.props.right ? ')' : ''}
//       </div>
//     );
//   }
// }

// export default Parentheses;
