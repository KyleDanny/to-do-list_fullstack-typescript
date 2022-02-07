import { useRef } from "react";
import './NewToDoForm.css'

type todoHandlerProps = {
  todoAddHandler: (todoText: string) => void
}

const NewToDoForm: React.FC<todoHandlerProps> = ({ todoAddHandler }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    todoAddHandler(enteredText);
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