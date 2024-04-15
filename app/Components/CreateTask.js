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
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {RadioButton} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

export default function CreateTask({addHandler}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [important, setImportant] = useState(true);
  const [myDay, setMyDay] = useState(true);
  const [description, setDescription] = useState('');

  const changeHandler = val => setText(val);

  const handleChangeDesc = val => setDescription(val);

  const showHandler = () => setOpen(true);

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
                onChangeText={changeHandler}
                styles={styles.input}
              />
            </View>

            {/* Date picker */}

            <View style={styles.modalEle}>
              <Text style={styles.textLabel}>Date: </Text>
              <Button title= "Select date" onPress={showHandler} />
              <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
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
                  status={important == true ? 'checked' : 'unchecked'}
                  onPress={() => setImportant(true)}
                />
                <RadioButton
                  value="false"
                  style={styles.radioButtonEle}
                  status={important == false ? 'checked' : 'unchecked'}
                  onPress={() => setImportant(false)}
                />
              </View>
            </View>

            {/* Radio button for my day */}
            <View style={styles.modalEle}>
              <Text style={styles.textLabel}>My Day</Text>
              <View style={styles.radioButton}>
                <RadioButton
                  value="true"
                  status={myDay == true ? 'checked' : 'unchecked'}
                  onPress={() => setMyDay(true)}
                />
                <RadioButton
                  value="false"
                  status={myDay == false ? 'checked' : 'unchecked'}
                  onPress={() => setMyDay(false)}
                />
              </View>
            </View>

            <TextInput
              multiline
              numberOfLines={5} // Adjust as needed
              value={description}
              onChangeText={handleChangeDesc}
              placeholder="Description"
              style={styles.description}
            />

            <View style={styles.modalEle}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  addHandler(text, date, important, myDay);
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
    alignItems: "center",
    justifyContent: "center"
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
    right: '10%'
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