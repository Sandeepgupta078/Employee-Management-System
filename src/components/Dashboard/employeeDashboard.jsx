
// import React from 'react';

// const EmployeeDashboard = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-white shadow-md p-4">
//         <h1 className="text-xl font-bold">Employee Dashboard</h1>
//       </header>
//       <main className="p-4">
//         <h2 className="text-lg font-semibold">Employee Tasks</h2>
//         <div className="space-y-4">
//           <button className="px-4 py-2 bg-yellow-500 text-white rounded">View Tasks</button>
//           <button className="px-4 py-2 bg-green-500 text-white rounded">Submit Task</button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default EmployeeDashboard;


import React from 'react'
import { Header } from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const employeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

export default employeeDashboard
