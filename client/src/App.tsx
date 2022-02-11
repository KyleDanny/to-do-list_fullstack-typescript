import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ToDoList from './components/ToDoList';

const App: React.FC = () => {

  return (
    <div className="App">
      <Routes> 
        <Route path="/dashboard" element={<ToDoList />} />
      </Routes>
    </div>
  );
}

export default App;
