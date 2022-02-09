import { RequestHandler } from 'express';
import { Todo } from '../models/todos';
import { collections } from "../services/database.service";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as {text: string}).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: 'Created the todo', createdTodo: newTodo });
}

export const getTodos: RequestHandler = async (req, res, next) => {
  try {
    const todos = (await collections.list!.find({}).toArray()) as unknown as Todo[];

     res.status(200).send(todos);
 } catch (error) {
     res.status(500).send('error.message');
 }
  // res.json({ todos: TODOS })
}

export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
  const todoId = req.params.id;
  const updatedText = (req.body as {text: string}).text;

  const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
  
  if (todoIndex < 0) {
    throw new Error('Could not find to do!')
  }

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);
  res.json({ message: 'Updated!', updatedTodos: TODOS[todoIndex] });
}

export const deleteTodo: RequestHandler = (req, res, next) => {
  const todoId = req.params.id;

  const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
  
  if (todoIndex < 0) {
    throw new Error('Could not find to do!')
  }

  TODOS.splice(todoIndex, 1);
  res.json({ message: 'Todo deleted!' })
}