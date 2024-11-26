import { useContext } from 'react';
import './App.css';
import ControlledForm from './Form/form';
import FormWithValidation from './Form/form2';
import Spread from './Form/spread';
import RenderCounter from './Hook/ref';
import Counter from './component/Counter';
import { CounterContext } from './Context/Counter';




function App() {
  const counterState = useContext(CounterContext);
  return (
    <div>
      <h1>Context API</h1>
      <p> Count is {counterState.count}</p>
      {/* <ControlledForm /> */}
      {/* <FormWithValidation /> */}
      {/* <RenderCounter /> */}
      {/* <Spread /> */}
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      
    
    </div>
  );
}

export default App;
