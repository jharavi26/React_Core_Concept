import React from 'react';

function Header({name, age, city='Bihar'}){           //Modern way to set Default props
// function Header({name, age, city}) {
  return (
  <h1>My name is {name} & age is {age} I live in {city}</h1>
  );
}

// Header.defaultProps = {          //unique way to set default props
//   name:'Rajan',
//   age:'24',
//   city:'Delhi'  
// };   

export default Header;

