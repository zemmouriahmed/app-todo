import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskStatus, deleteTask } from './tasksSlice';
import './Task.css';

function Task({ id, description, isDone }) {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTaskStatus(id));
    };

    const handleDelete = () => {
        dispatch(deleteTask(id));
    };

    return (
        <div className="task-container">
            <p className={`task-description ${isDone ? 'is-done' : ''}`} style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
                {description}
            </p>
            <div>
                <button className="toggle-button" onClick={handleToggle}>
                    {isDone ? 'Marquer comme à faire' : 'Marquer comme faite'}
                </button>
                <button className="delete-button" onClick={handleDelete}>Supprimer</button>
            </div>
        </div>
    );
}

export default Task;
