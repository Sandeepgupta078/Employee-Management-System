import React, { useState } from 'react';
import { useTaskContext } from '../context/taskContext';
import { useNavigate } from 'react-router-dom';

const NewTask = () => {
  const { addTask } = useTaskContext(); // Access the addTask function
  const [taskName, setTaskName] = useState('');
  const navigate = useNavigate();

  const handleAddTask = () => {
    const newTask = {
      id: Math.random(), // Generate a random ID for the task
      name: taskName,
      status: 'pending',
    };
    addTask(newTask); // Add the new task
    navigate('/tasks'); // Redirect to task list after adding
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black text-black">
      <div className="bg-white text-black p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-6 text-center">Add New Task</h2>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="block w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          onClick={handleAddTask}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
