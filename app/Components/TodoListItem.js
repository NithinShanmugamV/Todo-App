import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import React, {useContext} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TaskContext} from '../context/TaskContextProvider';

export default function TodoListItem({
  item,
  handlerChangeItemStatus,
}) {
  const {todos, todoDispatch} = useContext(TaskContext);
  return (
    <TouchableOpacity style={styles.item}>
      <Text>
        {item.completed ? (
          <Feather
            name="check-circle"
            color="green"
            size={30}
            onPress={() => todoDispatch({type: 'TOGGLE_TODO', payload: item.key})}
          />
        ) : (
          <Entypo
            name="progress-two"
            color="blue"
            size={30}
            onPress={() => todoDispatch({type: 'TOGGLE_TODO', payload: item.key})}
          />
        )}
      </Text>

      <Text>{item.text}</Text>
      <MaterialIcons
        name="cancel"
        color="red"
        size={30}
        onPress={() => {
          Alert.alert(
            'Delete task',
            'Are you certain about deleting this task?',
            [
              {
                text: 'Yes',
                onPress: () =>
                  todoDispatch({type: 'REMOVE_TODO', payload: item.key}),
              },
              {
                text: 'No',
                onPress: () => console.log('No'),
              },
            ],
          );
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
