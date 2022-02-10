import { useEffect, useRef } from "react";
import './NewToDoForm.css'
const axios = require('axios');


type todoHandlerProps = {
  todoAddHandler: (todoText: string) => void
}

const NewToDoForm: React.FC<todoHandlerProps> = ({ todoAddHandler }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = { text: textInputRef.current!.value }

    axios.post('http://localhost:3001/todos/', {
     enteredText
    })
    .then(function (response: object) {
      console.log(response);
    })

    todoAddHandler(enteredText.text);
  }

  useEffect(() => {
  })

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