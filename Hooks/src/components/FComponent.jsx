import React from 'react'

function FComponent({counter}) {
  return (
    <div>
        <h1>Function Component</h1>
        <h2>{counter}</h2>
        <hr></hr>
        <Fchild counter = {counter} />
    </div>
  );
}

const Fchild = ({counter}) =>{
    return(
        <div>
            <h1>Function child Component</h1>
            <h2>{counter}</h2>
        </div>
    );
};

export default FComponent