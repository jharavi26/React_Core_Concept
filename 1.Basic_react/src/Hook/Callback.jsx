import React, { useState, useCallback } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // No dependencies: function won't change after the first render

  console.log("Function memoized");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Timer;
