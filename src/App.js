import React from 'react';
import './App.css';
import AddTask from './AddTask'; 
import TaskList from './TaskList'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Application ToDo</h1>
      </header>
      <main>
        <AddTask />
        <TaskList />
      </main>
    </div>
  );
}

export default App;
