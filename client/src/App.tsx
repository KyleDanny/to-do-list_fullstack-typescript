import React, { useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import NewToDoForm from './components/NewToDoForm';

import { Todo } from './todo.model'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text: text }]);
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  }

  return (
    <div className="App">
      <NewToDoForm todoAddHandler={todoAddHandler} />
      <ToDoList items={todos} todoDeleteHandler={todoDeleteHandler} />
    </div>
  );
}

export default App;
