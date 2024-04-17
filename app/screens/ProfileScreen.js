import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../Context/UserContextProvider';
import {useNavigation} from '@react-navigation/native';
import {FIREBASE_AUTH} from '../FirebaseConfig';

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text>ProfileScreen</Text>
        <Button title="Logout" onPress={() => FIREBASE_AUTH.signOut()} />
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
