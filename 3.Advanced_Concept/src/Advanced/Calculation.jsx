import React from 'react'
import useCustome from '../Hooks/useCustome'

function Calculation() {
  const {count, increment, decrement} = useCustome()
  return (
    <div>
      <h1>Counter is :{count} </h1>
      <button onClick = {()=>increment()}>Addition</button>
      <button onClick = {()=>decrement()}>Substraction</button>
      
    </div>
  )
}

export default Calculation
