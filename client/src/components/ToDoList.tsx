import './ToDoList.css'

interface ToDoListProps {
  items: {id: string, text: string}[];
  todoDeleteHandler: (id: string) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({items, todoDeleteHandler}) => {

  return <ul>
    {items.map((todo) => 
      <li key={todo.id}>
        <span>{todo.text}</span>
        <button onClick={todoDeleteHandler.bind(null, todo.id)}>DELETE</button>
      </li>)}
  </ul>
} 

export default ToDoList;