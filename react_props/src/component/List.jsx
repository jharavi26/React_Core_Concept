import React from "react";

function List({item}){
    return <li>My favourite fruit is {item}</li>
}

function Fruits(){
const Items = ['apple', 'Mango', 'Banana', 'Pineapple'];
return (
    <div>
        <h1>Fruits in List</h1>
        <ol>
            {Items.map((item , index) =>(<List key={index} item={item}/>))}
        </ol>
    </div>
)
}

export default Fruits;

