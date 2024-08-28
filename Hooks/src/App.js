
import { useState } from 'react';
import './App.css';
import Counter from './components/useffect';
import Component from './components/useRef';

function App() {

  const [names, setNames] = useState('Anujkumar');
  const [flag, ] = useState(true);

  function changeName() {
    return setNames("Ravikumar"); 
  }

  return (
    <div>
      <h1>All React Hook </h1>
      <p> My name is { flag ? names : ' '}</p>;
      <button onClick={changeName} >Click Me</button>
      <Component />
      
      < Counter />
    </div>
  );
}

export default App;
