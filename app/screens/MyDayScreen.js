import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import { React, useState, useContext }  from 'react'
import Header from '../Components/Header'
import TodoForm from '../Components/TodoListItem'
import Footer from '../Components/Footer'
import TodoListItem from '../Components/TodoListItem'
import AddTodo from '../Components/AddTodo'
import CreateTask from '../Components/CreateTask'
import UserContext from '../Context/UserContext'
export default function MyDayScreen() {
    const {todos, setTodos} = useContext(UserContext);

    const addHandler = (text, date ) => {
        setTodos(prevTodos => {
            return [
                ...prevTodos,
                { text: text, key: prevTodos.length + 1, completed: false, important: true, description: "", endDate: date, myDay: true }
            ];
        })
    }

    const handlerRemoveItem = (key) => {
        setTodos((todos) => {
            return todos.filter(todo => todo.key != key)
        });
    }

    const handlerChangeItemStatus = key => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.key == key) return { ...todo, completed: !todo.completed };

                return todo;
            })
        })
    }

    const handlerStatus = (list, status) => {
        return list.filter(todo => todo.myDay == true);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header style={styles.header} />
            <View style={styles.content}>
                <View style={styles.list}>
                    <Text>My Day</Text>
                    <FlatList
                        data={handlerStatus(todos, false)}
                        renderItem={({ item }) => (
                            <TodoListItem item={item} handlerRemoveItem={handlerRemoveItem} handlerChangeItemStatus={handlerChangeItemStatus} />
                        )}
                    />
                </View>
                <CreateTask addHandler={addHandler} />
                {/* <AddTodo style={styles.addButton} submitHandler={addHandler} /> */}
            </View>
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