
import './App.css';
import AddTodo from './Component/Addtodo';
import AppName from './Component/AppName';
import TodoItem from './Component/TodoItem';

function App() {
  return( 
    <div>
      <AppName />
      <AddTodo />
      <TodoItem todoName={"Bring Milk"} todoDate={"12/10/2024"}/>

    
   
  </div>
  );
  }

export default App;
