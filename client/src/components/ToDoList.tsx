import React, { useEffect, useState } from 'react';
import './ToDoList.css'
import NewToDoForm from './NewToDoForm';
import { Todo } from '../todo.model'
const axios = require('axios');

const ToDoList: React.FC = () => {
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
    <div>
      <div>
        <h1> Todo List </h1>
        <h2> Dashboard </h2>
        <NewToDoForm todoAddHandler={todoAddHandler} />
      </div>
      <ul>
        {todos.map((todo) => 
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={todoDeleteHandler.bind(null, todo.id)}>DELETE</button>
          </li>)}
      </ul>
    </div>
  )
} 

export default ToDoList;