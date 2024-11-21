import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// class CounterApp extends React.Component {
//   // declaring state
//   state = {
//     count: 0,
//   }
//   // method which add one to the state

//   addOne = () => {
//     this.setState({ count: this.state.count + 1 })
//   }

//   // method which subtract one to the state
//   minusOne = () => {
//     this.setState({ count: this.state.count - 1 })
//   }
//   render() {
//     // accessing the state value
//     const count = this.state.count
//     return (
//       <div className='App'>
//         <h1>{count} </h1>

//         <div>
//           <button className='btn btn-add' onClick={this.addOne}>
//             +1
//           </button>{' '}
//           <button className='btn btn-minus' onClick={this.minusOne}>
//             -1
//           </button>
//         </div>
//       </div>
//     )
//   }
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <CounterApp /> */}
  </React.StrictMode>
);

