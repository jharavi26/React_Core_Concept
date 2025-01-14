// useReducer provides a more structured way to manage state, especially when the state transitions are more complicated or involve multiple sub-values.

// Syntax:-const [state, dispatch] = useReducer(reducer, initialState);

// reducer: A function that defines how the state should change based on the action. It takes two arguments:
//           state: The current state value.
//           action: An object describing the action being dispatched.

// initialState: The initial state value.

// state: The current state managed by the reducer.

// dispatch: A function used to dispatch actions that will trigger state changes.

//View => actions => dispatch => reducer => function => state => view 


import React, { useReducer } from 'react'
const reducer = (state, action)=>{
  switch (action.type) {
    case 'increment':
      return {count:state.count+1};
    case 'decrement':
      return {count:state.count-1};
    default:
      return state;
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer,{count:0})

  return (
    <div>
      <h1>Count : {state.count}</h1>
      <button onClick={()=>dispatch({type : "increment" })}>Increment</button>  
      <button onClick={()=>dispatch({type : "decrement" })}>Decrement</button> 
    </div>
  )
}

export default Reducer
