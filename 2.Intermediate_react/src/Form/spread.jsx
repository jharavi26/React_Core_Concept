//The spread operator (...) is widely used in React for various purposes, such as passing props, managing state, and dealing with arrays or objects. 

import { useState } from "react";

function Spread (){
  const[user, setUser] = useState({name :"Ravi", age : 25 }) ;

  const UpDateAge = ()=>{
    setUser((prevUser) =>({...prevUser, age : 27}));
  };
  return (
    <>
    <p>UserName ={user.name}, Age={user.age}</p>
    <button onClick={UpDateAge}>Update the Age</button>
    </>
  );
}

export default Spread;

