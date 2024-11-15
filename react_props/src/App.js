import './App.css';
import Header from './component/Header';

function App() {
  function handleClick()
{
      alert("I am clicked")
}  
return (
    <div>
      <h1>I am Parent component</h1>
    <Header name="Ravikumar" age="25"/>
    <button onClick={handleClick}>Click me </button>
    </div>
  );
}

export default App;
