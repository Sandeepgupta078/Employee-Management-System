import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null) 
    
    useEffect(() => {
      setLocalStorage()
      const localStorageData = getLocalStorage() || {}; // Fallback to an empty object
      const { employees, admin } = localStorageData; // Safe destructuring
      setUserData({ employees, admin });
  }, []);
    
  return (
    <div>
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
export { AuthContext }