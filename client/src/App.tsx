import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ToDoList from './components/ToDoList';
import Register from './components/Register';
import Login from './components/Login';

const App: React.FC = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ToDoList />} />
      </Routes>
    </div>
  );
}

export default App;
