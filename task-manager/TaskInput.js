import React from 'react';

const TaskInput = () => {
  return (
    <div className="task-input">
      <label>
        Title: <input type="text" placeholder="What's the title of your To Do?" />
      </label>
      <label>
        Description: <input type="text" placeholder="What's the description of your To Do?" />
      </label>
      <button>Add</button>
    </div>
  );
};

export default TaskInput;
