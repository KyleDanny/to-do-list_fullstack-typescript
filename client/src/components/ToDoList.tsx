const ToDoList: React.FC = () => {
  const todos = [ { id: 1, text: 'Apple' }, { id: 2, text: 'Banana' }, { id: 3, text: 'Pear' } ]

  return <ul>
    {todos.map((todo) => <li key={todo.id}> {todo.text} </li>)}
  </ul>
}

export default ToDoList;