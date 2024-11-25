// The useRef hook in React provides a way to create a mutable reference that persists across renders. It’s commonly used for accessing and manipulating DOM elements or storing values that don’t trigger a re-render when changed.

import React, { useRef, useState } from "react";

function RenderCounter() {
  const renderCount = useRef(0); // Initialize the ref
  const [value, setValue] = useState("");

  renderCount.current += 1; // Increment on every render

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something"
      />
      <p>Render Count: {renderCount.current}</p>
    </div>
  );
}

export default RenderCounter;


