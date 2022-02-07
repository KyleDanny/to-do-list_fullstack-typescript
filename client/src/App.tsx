import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
