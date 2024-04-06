// TaskList.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import './TaskList.css'; 

function TaskList() {
    const [filter, setFilter] = useState('all'); // Les états possibles sont 'all', 'done', 'notDone'
    const tasks = useSelector((state) => state.tasks);

    const filteredTasks = tasks.filter(task => {
        if (filter === 'done') return task.isDone;
        if (filter === 'notDone') return !task.isDone;
        return true; // Si 'all', aucun filtrage n'est effectué
    });

    return (
        <div className="tasklist-container">
            <div className="tasklist-buttons">
                <button 
                    onClick={() => setFilter('all')} 
                    className={filter === 'all' ? 'button-active' : ''}
                >
                    Toutes
                </button>
                <button 
                    onClick={() => setFilter('done')} 
                    className={filter === 'done' ? 'button-active' : ''}
                >
                    Faites
                </button>
                <button 
                    onClick={() => setFilter('notDone')} 
                    className={filter === 'notDone' ? 'button-active' : ''}
                >
                    À faire
                </button>
            </div>
            {filteredTasks.map((task) => (
                <Task key={task.id} {...task} />
            ))}
        </div>
    );
}

export default TaskList;
