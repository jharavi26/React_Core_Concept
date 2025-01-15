//The useMemo Hook in React is used for performance optimization. 
// It helps avoid unnecessary recalculations by memoizing (caching) the result of a function. 
// This is particularly useful when a component renders frequently, and some expensive computations don't need to be re-executed unless their dependencies change.

// Lazy Loading :-Lazy loading in React JS is a technique used to optimize the performance of your application by delaying the loading of components or resources until they are needed. This helps reduce the initial load time of your application and improves its efficiency, especially for large applications.

import React, { useState, useMemo } from 'react';

function WithUseMemo() {
  const [count, setCount] = useState(0);

  const memoizedResult = useMemo(() => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000000; i++) {} // Simulate heavy computation
    return count * 2;
  }, [count]);

  return (
    <div>
      <h1>Result: {memoizedResult}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default WithUseMemo;