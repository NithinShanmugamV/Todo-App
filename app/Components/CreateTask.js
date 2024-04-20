import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Button,
} from 'react-native';
import React, {useContext, useReducer, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {RadioButton} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import {TaskContext} from '../context/TaskContextProvider';

export default function CreateTask() {
  const [modalVisible, setModalVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const [modalData, setModalData] = useState({
    text: '',
    date: new Date(),
    important: true,
    myDay: true,
    description: '',
  });

  const {todos, todoDispatch} = useContext(TaskContext);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={styles.modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Create new task</Text>
            <View style={styles.modalEle}>
              <Text style={styles.textLabel}>Name: </Text>
              <TextInput
                multiline
                placeholder="new task.."
                onChangeText={val => setModalData({...modalData, text: val})}
                styles={styles.input}
              />
            </View>

            {/* Date picker */}

            <View style={styles.modalEle}>
              <Text style={styles.textLabel}>Date: </Text>
              <Button title="Select date" onPress={() => setOpen(true)} />
              <DatePicker
                modal
                open={open}
                date={modalData.date}
                onConfirm={date => {
                  setOpen(false);
                  setModalData({...modalData, date: date});
                  console.log(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </View>

            <View style={styles.modalEle}>
              <Text style={styles.textLabel}>Important</Text>
              <View style={styles.radioButton}>
                <RadioButton
                  value="true"
                  style={styles.radioButtonEle}
                  status={modalData.important == true ? 'checked' : 'unchecked'}
                  onPress={() => setModalData({...modalData, important: true})}
                />
                <RadioButton
                  value="false"
                  style={styles.radioButtonEle}
                  status={
                    modalData.important == false ? 'checked' : 'unchecked'
                  }
                  onPress={() => setModalData({...modalData, important: false})}
                />
              </View>
            </View>

            {/* Radio button for my day */}
            <View style={styles.modalEle}>
              <Text style={styles.textLabel}>My Day</Text>
              <View style={styles.radioButton}>
                <RadioButton
                  value="true"
                  status={modalData.myDay == true ? 'checked' : 'unchecked'}
                  onPress={() => setModalData({...modalData, myDay: true})}
                />
                <RadioButton
                  value="false"
                  status={modalData.myDay == false ? 'checked' : 'unchecked'}
                  onPress={() => setModalData({...modalData, myDay: false})}
                />
              </View>
            </View>

            <TextInput
              multiline
              numberOfLines={5} // Adjust as needed
              value={modalData.description}
              onChangeText={val =>
                setModalData({...modalData, description: val})
              }
              placeholder="Description"
              style={styles.description}
            />

            <View style={styles.modalEle}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  todoDispatch({type: 'ADD_TODO', payload: modalData});
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Add</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Exit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen, styles.buttonAdd]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>
          <Entypo name="add-to-list" size={20} />
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '80%', // Adjust width as needed
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%', // Adjust width as needed
  },

  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonEle: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
  },
  textLabel: {
    // marginLeft: 1,
    fontSize: 16,
    color: '#333',
  },
  description: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    margin: 3,
    marginBottom: 20,
    width: '100%', // Adjust width as needed
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOpen: {
    backgroundColor: 'green',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    margin: 5,
  },
  buttonAdd: {
    position: 'absolute',
    bottom: '10%',
    right: '10%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalEle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '3%',
  },
});
