// __mocks__/../context/TaskContextProvider.js

import React from 'react';

export const TaskContext = React.createContext({
  // Define default values or mock implementations for the context
  todos: [],
  todoDispatch: jest.fn(),
});
