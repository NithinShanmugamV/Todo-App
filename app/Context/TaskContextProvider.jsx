import {React, createContext, useContext, useEffect, useReducer} from 'react';
import {TodoReducer} from '../reducers/TodoReducer';
import {UserContext} from './UserContextProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TaskContext = createContext();

const TaskContextProvider = ({children}) => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  const {user} = useContext(UserContext);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        if (user) {
          let storedTodos;
          const url = `http://localhost:3000/users?email=${user.email}`;
          fetch(url)
            .then(res => {
              return res.json();
            })
            .then(data => {
              storedTodos = data[0].todos;
              console.log("todos: ", storedTodos);
              dispatch({type: 'LOAD_TODOS', payload: data[0].todos});
            })
            .catch(err => Alert.alert(err));
        } else {
          storedTodos = await AsyncStorage.getItem('todos');
          console.log(storedTodos)
          // dispatch({type: 'LOAD_TODOS', payload: data[0].todos});
        }
        // if (storedTodos) {
        //   // const parsedTodos = JSON.parse(storedTodos);
        //   dispatch({type: 'LOAD_TODOS', payload: storedTodos});
        // }
      } catch (err) {
        console.error('Error loading todos:', err);
      }
    };
    loadTodos();
  }, [user]);

  // useEffect(() => {
  //   const loadTodos = async () => {
  //     try {
  //       if (user) {
  //         let storedTodos;
  //         const url = `http://localhost:3000/users?email=${user.email}`;
  //         fetch(url)
  //           .then(res => {
  //             return res.json();
  //           })
  //           .then(data => {
  //             storedTodos = data[0].todos;
  //             console.log("todos: ", storedTodos);
  //             dispatch({type: 'LOAD_TODOS', payload: data[0].todos});
              
  //           })
  //           .catch(err => Alert.alert(err));
  //       } else {
  //         storedTodos = await AsyncStorage.getItem('todos');
  //       }
  //       // if (storedTodos) {
  //       //   // const parsedTodos = JSON.parse(storedTodos);
  //       //   dispatch({type: 'LOAD_TODOS', payload: storedTodos});
  //       // }
  //     } catch (err) {
  //       console.error('Error loading todos:', err);
  //     }
  //   };
  //   loadTodos();
  // }, [user]);

  // useEffect(() => {
  //   const saveTodos = async () => {
  //     try {
  //       if (user) {
  //         // Update remote API when user is logged in
  //         // Replace this with your code to update remote API
  //       } else {
  //         // Save todos to AsyncStorage when user is not logged in
  //         await AsyncStorage.setItem('todos', JSON.stringify(todos));
  //       }
  //     } catch (error) {
  //       console.error('Error saving todos:', error);
  //     }
  //   };

  //   saveTodos();
  // }, [todos, user]);


  return (
    <TaskContext.Provider value={{todos, todoDispatch: dispatch}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
