import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../context/UserContextProvider';
import {useNavigation} from '@react-navigation/native';
import {FIREBASE_AUTH} from '../FirebaseConfig';
import {TaskContext} from '../context/TaskContextProvider';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const {todoDispatch} = useContext(TaskContext);
  return (
    <View style={styles.container}>
      <View>
        <Text>ProfileScreen</Text>
        <Button
          title="Logout"
          onPress={() => {
            todoDispatch({type: 'RESET'});
            FIREBASE_AUTH.signOut();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
