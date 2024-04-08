import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

export default function AddTodo({submitHandler}) {
    const [text, setText] = useState('');

    const changeHandler = (val) => setText(val);
    
    return (
        <View style = {styles.container}>
            <TextInput
                placeholder="new task.."
                onChangeText = {changeHandler}
                styles = {styles.input}
            />
            <Button onPress={() => submitHandler(text)} title = "+" color= "coral" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // marginTop: 30 
    },
    input: {
        // marginTop: 10,
        // paddingHorizontal: 8,
        // paddingVertical: 6,
        // borderBottomWidth: 1,
        // borderBottomColor: "#ddd"
    }
})