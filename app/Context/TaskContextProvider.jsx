import {React, useState} from 'react';
import TaskContext from './TaskContext';

const TaskContextProvider = ({children}) => {
  const [todos, setTodos] = useState([
    {
      text: 'Complete react native training',
      key: 1,
      completed: true,
      important: true,
      description: '',
      endDate: '',
      myDay: false,
    },
    {
      text: 'Complete acceptable policy training',
      key: 2,
      completed: false,
      important: false,
      description: '',
      endDate: '',
      myDay: false,
    },
    {
      text: 'Attend townhall',
      key: 3,
      completed: false,
      important: true,
      description: '',
      endDate: '',
      myDay: true,
    },
  ]);
  return (
    <TaskContext.Provider value={{todos, setTodos}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
