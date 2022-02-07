import { useRef } from "react";

type todoHandlerProps = {
  todoHandler: (todoText: string) => void
}

const NewToDoForm: React.FC<todoHandlerProps> = ({ todoHandler }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    todoHandler(enteredText);
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef}/>
      </div>
      <button type="submit">ADD TO DO</button>
    </form>
  )
}

export default NewToDoForm;