//The useEffect hook is one of the most important and commonly used hooks in React. It allows you to perform side effects in functional components.
//Data fetching, Subscribing to events, Manipulating the DOM, Setting up timers or intervals

//useEffect(() => {
  // Effect logic (e.g., fetch data, event listeners)
//   return () => {
//        Cleanup logic (e.g., remove event listeners)
//   };
// }, [dependencies]);

import React, { useState, useEffect } from "react";

const DynamicBackground = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // DOM manipulation: Change the background color of a div
    const color = count % 2 === 0 ? "lightblue" : "lightcoral";
    document.getElementById("dynamicDiv").style.backgroundColor = color;
  }, [count]); // Dependency: Runs whenever 'count' changes

  return (
    <div>
      <h1>Counter: {count}</h1>
      <div
        id="dynamicDiv"
        style={{
          height: "100px",
          width: "100px",
          margin: "20px auto",
          border: "1px solid black",
        }}
      ></div>
      <button onClick={() => setCount(count + 1)}>Change Color</button>
    </div>
  );
};

export default DynamicBackground;

