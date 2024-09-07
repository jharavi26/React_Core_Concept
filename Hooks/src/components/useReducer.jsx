import React,{useReducer } from "react";

  

function CounterComponent() {
    const initialState = 0;
  

    function reducer(state, action){
        switch (action.type){
            case "increment":
                return state +1;
            case "decrement":
                return state -1;
            default:
                throw new Error("unknown action type");
        }


    }
    // const [counter, setCounter] = useState(0);

    const [state, dispatch] = useReducer(reducer, initialState);
    // const increment = ()=>{
    //     setCounter(counter+1);
    // };

    // const decrement = ()=>{
    //     setCounter(counter-1);
    // };

  return (
    <div>
        <h1>UseReducer Hook</h1>
        <h2>{state}</h2>
        <button onClick={()=>dispatch({type : "increment"})}>Addition</button>
        <button onClick={()=>dispatch({type : "decrement"})}>Deletion</button>
     </div>
  );
}

export default CounterComponent;