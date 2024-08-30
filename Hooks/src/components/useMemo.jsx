import React, {useMemo, useState } from 'react';

function Memo() {
  const [counter, setCounter] = useState(1);
  
  // Memoizing the factorial calculation
  const result = useMemo(() => factorial(counter), [counter]);

  return (
    <div>
      <h1>useMemo Hook Factorial of {counter} is : <span>{result}</span></h1>
      <div>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
      </div>
    );

  }


function factorial(n) {
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

export default Memo;
