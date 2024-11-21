// List rendering is the process of iterating over an array of data and rendering each item as a React component or JSX element. 
// This is commonly achieved using JavaScript's .map() method.



function List (){
  let foodItems = ['Grain','Rice','Bread','Vegetable','Milk','Salad' ];

  const handleBtn = (item)=>{
    console.log(`${item} being Bought`)
  }
  
  // let foodItems = [ ];

  return (
    <>
    <h1>Healthy Foods </h1>
    {foodItems.length===0?<h3>I am Still Hungry .</h3>:null}      
    <ol className="list-group">
      {foodItems.map(item => (                                  //Simple way to iterate a array
        <li key={item} className="item-1" >{item}<button style={{backgroundColor:'aqua', float:'right'}} 
        onClick={()=> handleBtn(item)}>buy</button></li>))}
    </ol>
    </>
  );
}

export default List;

// Key Points to Remember:
//1.Use unique keys for list items to help React optimize rendering.
//2.Use .map() to loop through arrays and render JSX elements.
//3.Avoid directly modifying the original array; use state for dynamic updates.
//4.Encapsulate list items in components for cleaner and reusable code.

//Conditional rendering in React allows you to render different elements or components based on certain conditions.
// React handles this similar to how JavaScript handles conditional logic using if, else, ternary operators, or logical operators.