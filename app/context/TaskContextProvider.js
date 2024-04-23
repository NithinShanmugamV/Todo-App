import {
  React,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import {TodoReducer} from '../reducers/TodoReducer';
import {UserContext} from './UserContextProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TaskContext = createContext();

const TaskContextProvider = ({children}) => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  const {user} = useContext(UserContext);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        if (user) {
          const url = `http://localhost:3000/users?email=${user.email}`;
          fetch(url)
            .then(res => {
              return res.json();
            })
            .then(data => {
              setUserData(data);
              console.log(userData[0], 'userData');
              dispatch({type: 'LOAD_TODOS', payload: data[0].todos});
            })
            .catch(err => Alert.alert(err));
        } else {
          AsyncStorage.getItem('todos')
            .then(data => {
              console.log('Fetch todo: ', JSON.parse(data));
              dispatch({type: 'LOAD_TODOS', payload: JSON.parse(data)});
            })
            .catch(err => console.log(err));
        }
      } catch (err) {
        console.error('Error loading todos:', err);
      }
    };
    loadTodos();
  }, [user]);

  useEffect(() => {
    const saveTodos = async () => {
      try {
        if (user) {
          const url = `http://localhost:3000/users?email=${user.email}`;
          const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({...userData[0], todos: todos}),
          };

          fetch(url, requestOptions)
            .then(response => {
              if (!response.ok) {
                throw new Error('Failed to add user');
              }
              return response.json();
            })
            .then(data => console.log('Todo added successfully:', data));
        } else {
          await AsyncStorage.setItem('todos', JSON.stringify(todos));
        }
      } catch (error) {
        console.error('Error saving todos:', error);
      }
    };

    saveTodos();
  }, [todos, user]);

  return (
    <TaskContext.Provider value={{todos, todoDispatch: dispatch}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
