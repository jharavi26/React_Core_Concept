//The useReducer hook in React is a more advanced state management option compared to useState. It is particularly useful for managing complex state logic or when the next state depends on the previous one.

//const [state, dispatch] = useReducer(reducer, initialState);
// state: The current state managed by the reducer.
// dispatch: A function to trigger actions that update the state.
// reducer: A function that takes the current state and an action, and returns the new state.
// initialState: The initial value for the state.

import React, { useReducer } from 'react';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unknown action type');
  }
};

function Counter() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default Counter;

