import { React, useState } from 'react'
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        { text: "Complete react native training", key: 1, completed: true, important: true, description: "", endDate: "", myDay: false },
        { text: "Complete acceptable policy training", key: 2, completed: false, important: false, description: "", endDate: "", myDay: false },
        { text: "Attend townhall", key: 3, completed: false, important: true, description: "", endDate: "", myDay: true }
    ]);
    return (
        <UserContext.Provider value={{ todos, setTodos }}>
            {children}{console.log(todos)}
        </UserContext.Provider>
    )
}

export default UserContextProvider