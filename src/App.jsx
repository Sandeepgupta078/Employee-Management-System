import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/employeeDashboard'
import AdminDashboard from './components/Dashboard/adminDashboard'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const UserData = JSON.parse(loggedInUser)
      setUser(UserData.role)
      setLoggedInUserData(UserData.data)
    }
  }, [userData])

  const handleLogin = (email, password) =>{
    if(email == 'admin@gmail.com' && password == 'admin123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
    }else if(userData.employees){
      const employee = authdata.userData.employees.find((e) => e.email === email && e.password === password)
      if(employee){
        setUser('employees')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: employee}))
      }
    }
    else{
      alert('Invalid Login')
    }
  }




  return (
    <>
    {!user && <Login handleLogin={handleLogin} />}
      {user == 'admin'? <AdminDashboard changeUser={setUser}/> : (user == 'employees'? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
      
    </>
  )
}

export default App

