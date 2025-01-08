import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import List from './component/List';
import Event from './component/Event';
import Counter from './Hook/State';
import DynamicBackground from './Hook/Effect';
import Timer from './Hook/Callback';
import Component1 from './component/class/Component1';



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
    <DynamicBackground />
    <Timer />
    <Component1 username="Art"/>
    
    </React.Fragment>
    
   
    
    
)
    
}

export default App; 
