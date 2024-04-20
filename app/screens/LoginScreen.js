import {Button, StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import {FIREBASE_AUTH} from '../FirebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {ActivityIndicator} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const auth = FIREBASE_AUTH;
export default function () {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const login = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, pw);
      console.log(response);
      console.log('Success');
    } catch (err) {
      // Check error codes and handle different cases
      switch (err.code) {
        case 'auth/user-not-found':
          console.log('Account not found.');
          Alert.alert('Account not found.');
          // Handle account not found error (e.g., display an error message)
          break;
        case 'auth/wrong-password':
          console.log('Incorrect password.');
          // Handle incorrect password error (e.g., display an error message)
          Alert.alert('Incorrect password.');
          break;
        default:
          console.log('Error:', err.message);
          // Handle other errors (e.g., display a generic error message)
          Alert.alert(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const goToSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        style={styles.input}
        placeholder="Enter email address"
        autoCapitalize="none"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        value={pw}
        secureTextEntry={true}
        style={styles.input}
        placeholder="Enter password"
        autoCapitalize="none"
        onChangeText={text => setPw(text)}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Button title="Login" onPress={login} />
          <Button title="Create an account" onPress={goToSignup} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    marginVertical: 4,
    height: 50,
    width: '60%',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
});
