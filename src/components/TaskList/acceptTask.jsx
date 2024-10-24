import React from 'react'

const acceptTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
      <div className='flex items-center justify-between'>
        <h3 className='bg-red-700 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2'>{data.taskDescription}</p>
      <div className='flex justify-between mt-5'>
        <button className='bg-green-500 py-1 px-2 text-sm rounded'>Mark as Accepted</button>
        <button className='bg-red-500 py-1 px-2 text-sm rounded'>Mark as Failed</button>
      </div>
    </div>
  )
}

export default acceptTask