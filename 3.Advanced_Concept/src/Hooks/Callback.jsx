//The useCallback hook is used to memoize a callback function, ensuring that the function is only recreated if its dependencies change. This is particularly useful in optimization scenarios, as it prevents unnecessary re-creations of functions during re-renders.

import React, { useState, useCallback } from 'react';

function Button({ handleClick, label }) {
  console.log(`Rendering button - ${label}`);
  return <button onClick={handleClick}>{label}</button>;
}

function SimpleUseCallbackExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Memoized callback for Count 1
  const incrementCount1 = useCallback(() => {
    setCount1((prev) => prev + 1);
  }, []);

  // Memoized callback for Count 2
  const incrementCount2 = useCallback(() => {
    setCount2((prev) => prev + 1);
  }, []);

  console.log('Rendering Parent Component');

  return (
    <div>
      <h1>useCallback Hook Example</h1>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button handleClick={incrementCount1} label="Increment Count 1" />
      <Button handleClick={incrementCount2} label="Increment Count 2" />
    </div>
  );
}

export default SimpleUseCallbackExample;
