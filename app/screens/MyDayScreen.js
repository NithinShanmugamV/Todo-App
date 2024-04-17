import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import {React, useState, useContext} from 'react';
import Header from '../Components/Header';
import TodoListItem from '../Components/TodoListItem';
import CreateTask from '../Components/CreateTask';
import { TaskContext } from '../Context/TaskContextProvider';

export default function MyDayScreen() {
  const {todos, setTodos} = useContext(TaskContext);

  const addHandler = (text, date, important, myDay) => {
    setTodos(prevTodos => {
      return [
        ...prevTodos,
        {
          text: text,
          key: prevTodos.length + 1,
          completed: false,
          important: important,
          description: '',
          endDate: date,
          myDay: myDay,
        },
      ];
    });
    console.log(todos);
  };

  const handlerRemoveItem = key => {
    setTodos(todos => {
      return todos.filter(todo => todo.key != key);
    });
  };

  const handlerChangeItemStatus = key => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.key == key) return {...todo, completed: !todo.completed};

        return todo;
      });
    });
  };

  const handlerStatus = (list, status) => {
    return list.filter(todo => todo.myDay == true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header} />
      <View style={styles.content}>
        <View style={styles.list}>
          <Text>My Day</Text>
          <ScrollView>
            {todos.map(item => {
              if (item.myDay === true) {
                return (
                  <TodoListItem
                    key={item.key}
                    item={item}
                    handlerRemoveItem={handlerRemoveItem}
                    handlerChangeItemStatus={handlerChangeItemStatus}
                  />
                );
              } else {
                return null; // If item is completed, don't render it
              }
            })}
          </ScrollView>
        </View>
        <CreateTask addHandler={addHandler} />
        {/* <AddTodo style={styles.addButton} submitHandler={addHandler} /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Align children with space between
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    // Header styles
  },
  list: {
    marginBottom: 20, // Add margin to the bottom of each list
  },
  addButton: {
    position: 'absolute',
    bottom: 20, // Adjust as needed
    right: 20, // Adjust as needed
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
});
