import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import {React, useState, useContext} from 'react';
import Header from '../components/Header';
import TodoListItem from '../components/TodoListItem';
import CreateTask from '../components/CreateTask';
import {TaskContext} from '../context/TaskContextProvider';

export default function MyDayScreen() {
  const {todos} = useContext(TaskContext);

  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header} />
      <View style={styles.content}>
        <View style={styles.list}>
          <Text>My Day</Text>
          <ScrollView>
            {todos.map(item => {
              if (item.myDay === true) {
                return <TodoListItem key={item.key} item={item} />;
              } else {
                return null; // If item is completed, don't render it
              }
            })}
          </ScrollView>
        </View>
        <CreateTask />
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
