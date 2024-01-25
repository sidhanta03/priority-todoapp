// TaskItem.js
import React from 'react';

const TaskItem = ({ task, onDeleteTask }) => {
  const { id, task: taskName, priority } = task;

  return (
    <li className='list-group-item d-flex justify-content-between align-items-start'>
      {taskName} - {priority}
      <button className='btn btn-danger' onClick={() => onDeleteTask(id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
