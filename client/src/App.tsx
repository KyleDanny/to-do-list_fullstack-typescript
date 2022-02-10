import React, { useEffect, useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import NewToDoForm from './components/NewToDoForm';
import { Todo } from './todo.model'
const axios = require('axios');

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const postToServer = (todos: Todo[]) => {
    axios.post('http://localhost:3001/todos/', {
      todos
    })
    .then(function (response: object) {
      console.log(response);
    })
  }

  const todoAddHandler = (newTodo: Todo) => {
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  }

  useEffect(() => {
    postToServer(todos);
  }, [todos])

  return (
    <div className="App">
      <NewToDoForm todoAddHandler={todoAddHandler} />
      <ToDoList items={todos} todoDeleteHandler={todoDeleteHandler} />
    </div>
  );
}

export default App;
