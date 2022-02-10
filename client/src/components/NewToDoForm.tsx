import { useRef } from "react";
import './NewToDoForm.css'
import { Todo } from '../todo.model'

type todoHandlerProps = {
  todoAddHandler: (todoText: Todo) => void
}

const NewToDoForm: React.FC<todoHandlerProps> = ({ todoAddHandler }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const newTodo = { id: Math.random().toString(), text: textInputRef.current!.value }
    todoAddHandler(newTodo);
    textInputRef.current!.value = '';
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">TO-DO LIST</label>
        <input type="text" id="todo-text" ref={textInputRef}/>
      </div>
      <button type="submit">ADD TO DO</button>
    </form>
  )
}

export default NewToDoForm;