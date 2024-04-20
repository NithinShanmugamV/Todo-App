import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Header from '../components/Header';
import TodoListItem from '../components/TodoListItem';
import CreateTask from '../components/CreateTask';
import {TaskContext} from '../context/TaskContextProvider';

export default function TodoScreen() {
  const {todos, setTodos} = useContext(TaskContext);

  const handlerStatus = (list, status) => {
    return list.filter(todo => todo.completed == status);
  };

  const handlerChangeItemStatus = key => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.key == key) return {...todo, completed: !todo.completed};

        return todo;
      });
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header} />
      <View style={styles.content}>
        <View style={styles.list}>
          <Text>Progress</Text>
          <ScrollView>
            {todos.map(item => {
              if (item.completed === false) {
                return (
                  <TodoListItem
                    key={item.key}
                    item={item}
                    handlerChangeItemStatus={handlerChangeItemStatus}
                  />
                );
              } else {
                return null; // If item is completed, don't render it
              }
            })}
          </ScrollView>
        </View>

        <View style={styles.list}>
          <Text>Completed</Text>
          <ScrollView>
            {todos.map(item => {
              if (item.completed === true) {
                return (
                  <TodoListItem
                    key={item.key}
                    item={item}
                    handlerChangeItemStatus={handlerChangeItemStatus}
                  />
                );
              } else {
                return null; // If item is completed, don't render it
              }
            })}
          </ScrollView>
        </View>
      </View>
      <CreateTask/>
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

  scrollView: {
    height: 300, // Set a specific height for the ScrollView
  },
  flatList: {
    flexGrow: 1,
  },
});
