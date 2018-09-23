import React, { Component } from 'react';

const stl = { display: 'flex', flexDirection: 'column' };
const hr = { width: '100%', height: '2px', background: '#333' };
class Fraction extends Component {
  render() {
    return (
      <div style={stl}>
        {this.props.children[0]}
        <div style={hr} />
        {this.props.children[1]}
      </div>
    );
  }
}

export default Fraction;
// const fraction = ({ top, bottom }) => {
//   return (
//     <div>
//       <div>{top}</div>
//       <div>{bottom}</div>
//     </div>
//   );
// };

// export default fraction;
