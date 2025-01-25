import React from 'react';

const TaskList = () => {
  const tasks = [
    { id: 1, title: 'Task 1', description: 'Description for Task 1' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2' },
    { id: 3, title: 'Task 3', description: 'Description for Task 3' },
    { id: 4, title: 'Task 4', description: 'Description for Task 4' },
    { id: 5, title: 'Task 5', description: 'Description for Task 5' },
  ];

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
