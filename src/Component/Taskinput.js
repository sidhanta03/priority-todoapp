// TaskInput.js
import React, { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleAddTask = () => {
    if (task.trim() === '') return;

    onAddTask({ task, priority });
    setTask('');
    setPriority('Low');
  };

  return (
    <div className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select
          className="form-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
