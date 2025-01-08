// An uncontrolled component :-It is a form element where the DOM handles the form data. 
// You use ref to directly access the DOM value when needed.
// The input value is managed by the DOM.
// Access the value using a ref.
// Simpler but less flexible for scenarios like validation or real-time feedback.

import React, { useRef, useState } from 'react'

function UncontrolledForm() {

  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  const [condition, setCondition] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    setCondition(true)

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" ref = {nameRef}/>
      <input type="password" ref = {passwordRef}/>
      <button>Submit</button>
      </form>
      {
        condition && (<h1>{nameRef.current.value} {passwordRef.current.value}</h1>)
        
      }
      
    </div>
  )
}

export default UncontrolledForm
