
import './App.css';
import ProductList from './components';
import FormHandling from './components/form';
import DemoForm from './components/form2';
import FunctionalComponent from './components/functional_component';

function App() {
  return (
    <div >
      <h1>State & Hook Concept </h1>
      <FunctionalComponent />
      <ProductList name="Ravikumar" city="Delhi" />
      <FormHandling />
      <DemoForm />
     
    </div>
  );
}

export default App;



