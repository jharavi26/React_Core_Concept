import React from 'react';
import './App.css';
import Header from './component/Header';
import List from './component/List';
import Event from './component/Event';
import Counter from './Hook/State';
function App() {
  const name ="Rajan";
  const lastname ="Jha"
  
return (
  <React.Fragment>
    <h1> Welcome {name +" " +lastname} in React Learning Journey. </h1>  {/*This is example of JSX  any expression can be written b */}
    <Header name="Ravikumar" age="25"/>
    <List/>
    <Event />
    <Counter />
    </React.Fragment>
)
    
}

export default App; 
