import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'

export default function CreateTask({ addHandler }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState('');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    

    const changeHandler = (val) => setText(val);

    const showHandler = () => setOpen(true)

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
                        <Text style={styles.modalText}>Hello World!</Text>
                        <TextInput
                            placeholder="new task.."
                            onChangeText={changeHandler}
                            styles={styles.input}
                        />
                        {/* Date picker */}

                        <>
                            <Button title="Open" onPress={showHandler} />
                            <DatePicker
                                modal
                                open={open}
                                date={date}
                                onConfirm={(date) => {
                                    setOpen(false)
                                    setDate(date)
                                    console.log(date)
                                }}
                                onCancel={() => {
                                    setOpen(false)
                                }}
                            />
                        </>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                addHandler(text)
                                setModalVisible(!modalVisible)
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
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>+</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: 'green',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
        margin: 5
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});