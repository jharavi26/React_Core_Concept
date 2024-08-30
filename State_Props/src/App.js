
import './App.css';
import ProductList from './components';
import FunctionalComponent from './components/functional_component';

function App() {
  return (
    <div >
      <h1>State & Hook Concept </h1>
      <FunctionalComponent />
      <ProductList name="Ravikumar" city="Delhi" />
     
    </div>
  );
}

export default App;
