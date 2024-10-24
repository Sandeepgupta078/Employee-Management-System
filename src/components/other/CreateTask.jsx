import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)
  const [task, setTask] = useState({ taskTitle: '', taskDate: '', assignTo: '', category: '', taskDescription: '' })
  const [newTask, setnewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

    // Destructure task object to get the fields
    const { taskTitle, taskDate, assignTo, category, taskDescription } = task

    setnewTask({ 
      taskTitle, 
      taskDate, 
      assignTo, 
      category, 
      taskDescription, 
      active: false, 
      newTask: true, 
      completed: false, 
      failed: false
    })

    const data = userData.employees
    console.log(data)
    data.forEach(element => {
      if (task.assignTo === element.firstName) {
        element.tasks.push(newTask)
        element.taskCounts.newTask += 1
      }
    })
    setUserData({ ...userData, employees: data })
    setTask({ taskTitle: '', taskDate: '', assignTo: '', category: '', taskDescription: '' })
  }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-10 rounded'>
      <div className='font-bold text-xl mt-5 text-blue-300'>Create Task</div>
      <form 
        onSubmit={submitHandler}
        className='flex flex-wrap w-full items-start justify-between mt-10'>

        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-1'>Task Title</h3>
            <input 
              value={task.taskTitle}  // Use correct task field
              onChange={(e) => setTask({ ...task, taskTitle: e.target.value })}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' 
              type="text" 
              placeholder='task title' 
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-1'>Date</h3>
            <input
              value={task.taskDate}  // Use correct task field
              onChange={(e) => setTask({ ...task, taskDate: e.target.value })} 
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' 
              type="date" 
              placeholder='dd/mm/yyyy' 
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-1'>Assign to</h3>
            <input
              value={task.assignTo}  // Use correct task field
              onChange={(e) => setTask({ ...task, assignTo: e.target.value })} 
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' 
              type="text" 
              placeholder='employee name' 
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-1'>Category</h3>
            <input
              value={task.category}  // Use correct task field
              onChange={(e) => setTask({ ...task, category: e.target.value })}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' 
              type="text" 
              placeholder='development, design, editing, etc' 
            />
          </div>
        </div>

        <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-1'>Description</h3>
          <textarea
            value={task.taskDescription}  // Use correct task field
            onChange={(e) => setTask({ ...task, taskDescription: e.target.value })} 
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' 
            placeholder='detailed description of work about 100 words' 
          />
          <button 
            className='w-full mt-4 text-sm rounded px-5 py-3 bg-emerald-500 hover:bg-emerald-700'>
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
