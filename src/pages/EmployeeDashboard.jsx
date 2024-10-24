import React from 'react';
import { useAuthContext } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';

const EmployeeDashboard = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to Login page
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl">Employee Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Logout
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Link to="/tasks" className="bg-green-500 text-white p-4 rounded shadow hover:bg-green-600">
          View Your Tasks
        </Link>
        <Link to="/tasks/completed" className="bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600">
          View Completed Tasks
        </Link>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
