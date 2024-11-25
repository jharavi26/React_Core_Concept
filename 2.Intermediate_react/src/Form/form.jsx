//Forms in React are used to collect input from users and process it in your application. React handles forms differently than 
//traditional HTML due to its declarative nature and the concept of controlled components. 

//Controlled Component :- A controlled component is where the form input is controlled by React state. The value of the input is bound
// to a state variable, and changes are handled via an event handler.

import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value); // Update state
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    alert(`Form submitted with name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
