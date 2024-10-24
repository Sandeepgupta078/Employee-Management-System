import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail('')
        setPassword('')
        console.log('Form submitted')
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className ='border-2 border-emerald-600 rounded-xl p-20'>
            <form 
            onSubmit={(e) => {
                submitHandler(e)// Call the submitHandler function when the form is submitted
            }}
            className='flex flex-col items-center justify-center'>
                <input required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className = 'outline-none border-2 border-emerald-600 bg-transparent rounded-full px-6 py-2 text-xl placeholder:text-grey-400'
                type="email" placeholder='Enter your email' />

                <input required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className = 'outline-none border-2 border-emerald-600 bg-transparent rounded-full px-6 py-2 mt-5 text-xl placeholder:text-grey-400'
                type="password" placeholder='Enter your password' />
                <button className='mt-7 border-none outline-none text-white bg-emerald-600 hover:bg-emerald-800 rounded-full text-lg px-8 py-2 w-full'>Log In</button>
            </form>
        </div> 
    </div>
  )
}

export default Login


// import React, { useState } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Login details:', { email, password });
//     // Implement login logic here
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <div className="mb-4">
//           <label className="block mb-1 text-gray-600">Email</label>
//           <input
//             type="email"
//             className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1 text-gray-600">Password</label>
//           <input
//             type="password"
//             className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
