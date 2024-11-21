import './App.css';
import Header from './component/Header';
function App() {
  const name ="Rajan";
  const lastname ="Jha"
  
return (
  <div>
    <h1> Welcome {name +" " +lastname} in React Learning Journey. </h1>  {/*This is example of JSX  any expression can be written b */}
    <Header name="Ravikumar " age="25"/>
    </div>
  );
}

export default App; 
