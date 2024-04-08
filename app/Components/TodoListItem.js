import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React from 'react'
// import { Icon } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export default function TodoListItem({ item, handlerRemoveItem, handlerChangeItemStatus }) {
  return (
    <TouchableOpacity style={styles.item}>
      <Text>
      {item.completed ? (
        <Feather name= "check-circle" color="green" size={30} onPress={() => handlerChangeItemStatus(item.key)} />)
        : (<Entypo name="progress-two" color="blue" size={30} onPress={() => handlerChangeItemStatus(item.key)} />)
      }</Text>

      <Text>{item.text}</Text>
      <MaterialIcons name = "cancel" color = "red" size = {30} onPress={() => handlerRemoveItem(item.key)} />
      {/* <Button onPress={() => handlerRemoveItem(item.key)} title='X' /> */}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
})

/*
 <Icon name = "check-circle" onPress = {() =>{
        console.log(item.completed)
        item.completed ? item.completed = false : item.completed = true
      }}/>

      */