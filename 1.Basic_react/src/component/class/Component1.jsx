import React, { Component } from 'react'

export default class Component1 extends Component {
  render() {                                            //Display UI 
    return (
      <div>
        <p>This is Class-Based Component</p>
        
      </div>
    )
  }
}




//LifeCycle of React Component 
// 1.Mounting :-This is when the component is first created and inserted into the DOM. 
// 2.Updation :-This occurs when props or state changes.
// 3.Unmounting :- This is when the component is removed from the DOM.
