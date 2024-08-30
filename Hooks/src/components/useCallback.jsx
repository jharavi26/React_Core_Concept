import React, { useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Directly defined callback function
  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
}

function ChildComponent({ onClick }) {
  console.log('ChildComponent re-rendered');
  return <button onClick={onClick}>Increment</button>;
}

export default ParentComponent;
