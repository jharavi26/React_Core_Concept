//The useRef Hook in React is a way to create a mutable reference that persists across renders. It is commonly used to directly interact with the DOM, store mutable values, or keep a reference to a value that doesn’t trigger a re-render when it changes.

import React, { useState, useRef, useEffect } from 'react';

function PreviousState() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(count);

  useEffect(() => {
    prevCount.current = count; // Update ref with current state
  }, [count]);

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default PreviousState;


