import React from "react";

const TaskItem = ({ task }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <h3 className="font-bold">{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskItem;
