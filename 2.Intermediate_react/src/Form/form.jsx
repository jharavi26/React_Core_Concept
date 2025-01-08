//Forms in React are used to collect input from users and process it in your application. React handles forms differently than 
//traditional HTML due to its declarative nature and the concept of controlled components. 

//Controlled Component :- A controlled component is where the form input is controlled by React state.
//The value of the input is bound to a state variable, and changes are handled via an event handler.

import React, { useState } from "react";

function ControlledForm() {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    password:""

  });

  const [condition, setCondition] = useState(false);


  function handleSubmit(e){
    e.preventDefault()
    setCondition(true);
    setFormData((prev)=>({...prev, email:""}))
  }
   function handleChange(e){
    setFormData((prev=>({...prev, [e.target.name]:e.target.value})))

  }

  return (
    <form onSubmit={handleSubmit}>
       <input type="text" value={formData.name} onChange={handleChange} name='name' /><br/>
        <input type="email" value={formData.email} onChange={handleChange} name='email'/><br/>
        <input type="Number" value={formData.phone} onChange={handleChange} name='phone' /><br/>
        <input type="password" value={formData.password} onChange={handleChange} name='password' /><br/>
      <button type="submit">Submit</button>
      {
        condition && (<h1>{formData.name} {formData.email}</h1>) 
      }
    </form>
  );
}

export default ControlledForm;
