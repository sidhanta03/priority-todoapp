// TaskList.js
import React from 'react';  
import TaskItem from './TaskItem';
const TaskList = ({ title, tasks, onDeleteTask }) => {
  return (
    <div>  
      <h2>{title}</h2>
      <ul className='list-group'>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDeleteTask={onDeleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
