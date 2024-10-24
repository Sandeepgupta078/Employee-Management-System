// // Utility function to set an item in localStorage
// export const setItem = (key, value) => {
//     localStorage.setItem(key, JSON.stringify(value));
//   };
  
//   // Utility function to get an item from localStorage
//   export const getItem = (key) => {
//     const item = localStorage.getItem(key);
//     return item ? JSON.parse(item) : null;
//   };
  
//   // Utility function to remove an item from localStorage
//   export const removeItem = (key) => {
//     localStorage.removeItem(key);
//   };
  
//   // Utility function to clear all items from localStorage
//   export const clearStorage = () => {
//     localStorage.clear();
//   };
  
//   // Utility function to check if a specific item exists in localStorage
//   export const hasItem = (key) => {
//     return localStorage.getItem(key) !== null;
//   };

import { employees, admin} from './data.json'


export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () =>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return{employees, admin}
}

