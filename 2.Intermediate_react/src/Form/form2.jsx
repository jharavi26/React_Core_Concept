//An uncontrolled component relies on the DOM itself to manage the form input. 
// This is closer to how forms are handled in plain HTML.

import React, { useState } from "react";

function FormWithValidation() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");


  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.includes("@")) {
      setError("Invalid email address");
    } else {
      setError("");
      alert(`Form submitted with email: ${email}`);
      setEmail("");   //Clear the email field after submission
    }
  };

  return (
    <form style={{ maxWidth: "400px", margin: "auto" }} onSubmit={handleSubmit}>
      <label style={{ display: "block", marginBottom: "8px" }}>
        Email:
        <input type="text" value={email} onChange={handleChange} style={{ width: "100%", padding: "8px", marginBottom: "16px" }} />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit" style={{ padding: "8px 16px" }}>Submit</button>
    </form>
  );
}

export default FormWithValidation;
