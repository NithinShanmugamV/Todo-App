import { FlatList, SafeAreaView, StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Header'
import TodoForm from '../Components/TodoListItem'
import Footer from '../Components/Footer'
import TodoListItem from '../Components/TodoListItem'
import AddTodo from '../Components/AddTodo'
import CreateTask from '../Components/CreateTask'

export default function TodoScreen() {
    const [todos, setTodos] = useState([
        { text: "Complete react native training", key: 1, completed: true, important: true, description: "", endDate: "", myDay: false },
        { text: "Complete acceptable policy training", key: 2, completed: false, important: false, description: "", endDate: "", myDay: false},
        { text: "Attend townhall", key: 3, completed: false, important: true, description: "", endDate: "", myDay: true }
    ]);

    const addHandler = (text, date ) => {
        setTodos(prevTodos => {
            return [
                ...prevTodos,
                { text: text, key: prevTodos.length + 1, completed: false, important: true, description: "", endDate: date, myDay: false }
            ];
        })
    }

    const handlerRemoveItem = (key) => {
        setTodos((todos) => {
            return todos.filter(todo => todo.key != key)
        });
    }

    const handlerStatus = (list, status) => {
        return list.filter(todo => todo.completed == status);
    }

    const handlerChangeItemStatus = key => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.key == key) return { ...todo, completed: !todo.completed };

                return todo;
            })
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header style={styles.header} />
            <View style={styles.content}>
                <View style={styles.list}>
                    <Text>Progress</Text>
                    <FlatList
                        data={handlerStatus(todos, false)}
                        renderItem={({ item }) => (
                            <TodoListItem item={item} handlerRemoveItem={handlerRemoveItem} handlerChangeItemStatus={handlerChangeItemStatus} />
                        )}
                    />
                </View>

                <View style={styles.list}>
                    <Text>Completed</Text>
                    <FlatList
                        data={handlerStatus(todos, true)}
                        renderItem={({ item }) => (
                            <TodoListItem item={item} handlerRemoveItem={handlerRemoveItem} handlerChangeItemStatus={handlerChangeItemStatus} />
                        )}
                    />
                </View>
                
                <CreateTask addHandler = {addHandler}/>
                {/* <AddTodo style={styles.addButton} submitHandler={addHandler} /> */}
            </View>
            <Footer style={styles.footer} />
        </SafeAreaView>
    )
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
})