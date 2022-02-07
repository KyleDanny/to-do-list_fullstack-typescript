import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import NewToDoForm from './components/NewToDoForm';

const App: React.FC = () => {
  const todos = [ { id: '1', text: 'Apple' }, { id: '2', text: 'Banana' }, { id: '3', text: 'Pear' } ]

  const todoHandler = (text: string) => {
    console.log(text);
  }

  return (
    <div className="App">
      <NewToDoForm todoHandler={todoHandler} />
      <ToDoList items={todos} />
    </div>
  );
}

export default App;
