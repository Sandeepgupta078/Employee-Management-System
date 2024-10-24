import React, { useState } from 'react';
import { useAuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuthContext(); // Access the login function
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock login validation (You can replace this with real API login validation)
    if (email === 'admin@example.com') {
      const userData = { id: 1, email, name: 'Admin User', role: 'admin' };
      login(userData);
      navigate('/admin'); // Redirect to Admin Dashboard
    } else {
      const userData = { id: 2, email, name: 'Employee User', role: 'employee' };
      login(userData);
      navigate('/employee'); // Redirect to Employee Dashboard
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-6 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-2 mb-4 border border-gray-300 rounded text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-2 mb-4 border border-gray-300 rounded text-black"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
