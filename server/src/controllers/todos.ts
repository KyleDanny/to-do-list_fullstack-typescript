import { RequestHandler } from 'express';
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Todo from '../models/todos';


export const getTodos: RequestHandler = async (req, res, next) => {
  const todos = (await collections.list!.find({}).toArray()) as unknown as Todo[];
  res.status(200).send(todos);
}

export const createTodo: RequestHandler = async (req, res, next) => {
  const text = (req.body as {text: string}).text;
  const newTodo = new Todo(text);
  await collections.list?.insertOne(newTodo);
  res.status(201).json({ message: 'Created the todo', createdTodo: newTodo });
}

export const updateTodo: RequestHandler<{id: string}> = async (req, res, next) => {
  const id = req.params.id;
  const updatedText: Todo = req.body as Todo;
  const query = { _id: new ObjectId(id) };
  await collections.list!.updateOne(query, { $set: updatedText });

  const todos = (await collections.list!.find({}).toArray()) as unknown as Todo[];
  
  res.status(200).json({ message: 'Updated!', updatedTodos: todos });
}

// export const deleteTodo: RequestHandler = (req, res, next) => {
//   const todoId = req.params.id;

//   const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
  
//   if (todoIndex < 0) {
//     throw new Error('Could not find to do!')
//   }

//   TODOS.splice(todoIndex, 1);
//   res.json({ message: 'Todo deleted!' })
// }