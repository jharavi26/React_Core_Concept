import './App.css';
import Header from './component/Header';
import Fruits from './component/List';

function App() {
  const name ="Rajan";
  const items = ['Apple', 'Banana', 'Cherry'];
return (
  <div>
    <h1> Welcome {name} in G&G </h1>                        {/*This is example of JSX */}
    <Header name="Ravikumar" age="25"/>
    <Fruits />
    <h1>Fruit List:</h1>                         
      <ol>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default App; 
