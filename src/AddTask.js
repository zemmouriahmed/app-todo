import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './tasksSlice';
import ErrorMessageModal from './ErrorMessageModal'; 
import './AddTask.css';

function AddTask() {
    const [taskDescription, setTaskDescription] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskDescription.trim() === "") {
            setError('La description de la tâche ne peut pas être vide.');
            return;
        }
        dispatch(addTask({ description: taskDescription, isDone: false }));
        setTaskDescription('');
        setError(''); // Nettoyez l'erreur après un succès
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ajouter une nouvelle tâche"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                />
                <button type="submit">Ajouter</button>
            </form>
            <ErrorMessageModal message={error} onClose={() => setError('')} />
        </>
    );
}

export default AddTask;
