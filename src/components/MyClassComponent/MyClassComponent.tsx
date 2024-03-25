// import React, { Component } from 'react';

// interface MyClassComponentProps {
//   name: string;
// }

// interface MyClassComponentState {
//   count: number;
// }

// class MyClassComponent extends Component<
//   MyClassComponentProps,
//   MyClassComponentState
// > {
//   constructor(props: MyClassComponentProps) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   }

//   render() {
//     const { name } = this.props;
//     const { count } = this.state;
//     return (
//       <div>
//         <p>Hello, {name}!</p>
//         <p>Count, {count}</p>
//         <button onClick={this.handleClick}>Increment</button>
//       </div>
//     );
//   }
// }

// export default MyClassComponent;
