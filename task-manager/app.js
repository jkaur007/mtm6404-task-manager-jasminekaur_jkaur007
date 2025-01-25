import React from 'react';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <h1>My Todos</h1>
        <TaskInput />
        <TaskList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
