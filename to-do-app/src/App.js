
import { useState } from 'react';
import './App.css';
import AddTodo from './Component/Addtodo';       //Component for adding new todo items
import AppName from './Component/AppName';
import TodoItems from './Component/TodoItems';    // Component rendering the list of todo items
import WelcomeMessage from './Component/WelcomeMessage';

function App() {

  const [todoItems, setTodoItems] =useState([]); 

  const handleNewItem = (itemName, itemDueDate) =>{
    console.log(`New Item Added, ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      {name : itemName, dueDate : itemDueDate},
    ];
    setTodoItems(newTodoItems);
    };

    const handleDeleteItem = (todoItemName) =>{
      const newTodoItems = todoItems.filter((item)=>item.name !== todoItemName);
      setTodoItems(newTodoItems);

    }

  return( 
    <div>
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems ={todoItems}
      onDeleteClick={handleDeleteItem}></TodoItems>

    
   
  </div>
  );
  }

export default App;
