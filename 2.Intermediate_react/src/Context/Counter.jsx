//CreateContext: To create a context object for global state management
//useState: To manage the local state within the provider component

import {createContext , useState} from "react";

// Creating a context for managing the counter state
// This will allow components to access and update the counter value
export const CounterContext = createContext(null);
 

// Creating a Provider component for the CounterContext
// - This component provides the counter state (`count`) and a function to update it (`setCount`)
// - It wraps the child components that need access to this shared state

export const CounterProvider = (props) =>{
  const [count, setCount] = useState(3);
  return (
    <CounterContext.Provider value= {{count, setCount}}>
      {props.children}
    </CounterContext.Provider>
  )
};

//Steps to Rember while Creating Context API
// Step 1: Create the Context
// Step 2: Create a Provider Component
// Step 3: Wrap Your App or Components
// Step 4: Consume the Context


