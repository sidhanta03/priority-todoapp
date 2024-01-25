import './App.css';
import React, { useState } from 'react';
import Taskinput from './Component/Taskinput';
import TaskList from './Component/TaskList';
const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className='container mt-4'>
      <h2 className='ml-4'>Priority To-Do List App</h2>
       <div className='row'>
       <Taskinput onAddTask={handleAddTask} />
       <div className="col-md-6 col-lg-4 mb-3 ">
      <TaskList title="Low Priority" tasks={tasks.filter((task) => task.priority === 'Low')} onDeleteTask={handleDeleteTask} />
      </div>
      <div className="col-md-6 col-lg-4 mb-3">
      <TaskList title="Medium Priority" tasks={tasks.filter((task) => task.priority === 'Medium')} onDeleteTask={handleDeleteTask} />
      </div>
      <div className="col-md-6 col-lg-4 mb-3">
      <TaskList title="High Priority" tasks={tasks.filter((task) => task.priority === 'High')} onDeleteTask={handleDeleteTask} />
      </div>
      </div>
    </div>
  );
};

export default App;



