//useEffect :- Allows you to perform side effects in your components (e.g., fetching data, setting up subscriptions).

import React, { useEffect, useState } from "react";

function Effect() {
  const [count, Setcount] = useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      Setcount(count =>count+1);

    },2000)
  },[])
  return (
    <div>
      <h1> I have a rendered {count} times.</h1>
      
    </div>
  )
}

export default Effect

