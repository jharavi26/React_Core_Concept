// Error boundaries in React are components designed to catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole application. They help improve the user experience by gracefully handling errors at runtime.

import React, { useEffect, useState } from 'react'

function Calculation() {
  const [count, setCount] = useState(1)

  useEffect(()=>{
    if(count === 13){
      throw new Error ("App Damaged"); 
    }
  })

  return (
    <div>
      <p>Count is : {count}</p>
      <button onClick={()=>setCount(count+4)}>Increment</button>
      
    </div>
  )
}

export default Calculation
