import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push({ id: Date.now(), ...action.payload });
        },
        toggleTaskStatus: (state, action) => {
            const task = state.find(task => task.id === action.payload);
            if (task) {
                task.isDone = !task.isDone;
            }
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload);
        },
        updateTask: (state, action) => {
            const { id, description, isDone } = action.payload;
            const existingTask = state.find(task => task.id === id);
            if (existingTask) {
                existingTask.description = description;
                existingTask.isDone = isDone;
            }
        },
    },
});

// Action creators sont générés pour chaque cas de reducer
export const { addTask, toggleTaskStatus, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
