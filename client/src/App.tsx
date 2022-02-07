import React, { useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import NewToDoForm from './components/NewToDoForm';

import { Todo } from './todo.model'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text: text }]);
  }

  return (
    <div className="App">
      <NewToDoForm todoHandler={todoHandler} />
      <ToDoList items={todos} />
    </div>
  );
}

export default App;
