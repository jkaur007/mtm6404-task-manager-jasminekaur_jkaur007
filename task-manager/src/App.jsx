import React from "react";
import Layout from "./components/Layout";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
        <TaskList />
      </div>
    </Layout>
  );
};

export default App;
