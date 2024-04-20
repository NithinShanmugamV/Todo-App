import {React, createContext, useReducer} from 'react';
import {TodoReducer} from '../reducers/TodoReducer';

export const TaskContext = createContext();

const TaskContextProvider = ({children}) => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  return (
    <TaskContext.Provider value={{todos, todoDispatch: dispatch}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
