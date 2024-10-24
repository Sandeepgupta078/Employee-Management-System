import React from 'react'

export const Header = (props) => {

  const logOutuser = () => {
    localStorage.setItem('loggedInUser', '')
    // window.location.reload()
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'> 
        <h1 className='text-2xl font-medium hover:text-gray-300'> Hello, <br/>  <span className='text-3xl font-semibold hover:text-gray-300'>{props.data?.firstName ||'Guest'} 👋</span></h1>
        <button onClick={logOutuser} className='bg-red-600 hover:bg-red-800 text-lg font-medium text-white px-5 py-2 rounded-md '>Logout</button>
    </div>
  )
}
