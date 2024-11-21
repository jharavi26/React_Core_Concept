// In HTML event names are usually written in lowercase, like click, mouseover, etc. In React, event names are written in camelCase.


function Event(){
  const handleClick = (event) => {
    console.log("Event Target: ", event.target);
    console.log("Event Type: ", event.type);
  };

  return (
  <>

  <button onClick={handleClick}>Click Me!</button><br />
  <input type='text' placeholder="Enter what you want " onChange={(e) =>console.log(e.target.value)}/>
  </>
  )
  
  }
  
export default Event;