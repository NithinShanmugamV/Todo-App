import {Button, StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {FIREBASE_AUTH} from '../FirebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {ActivityIndicator} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const auth = FIREBASE_AUTH;
export default function () {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const SignUp = async () => {
    setLoading(true);
    try {
      const response = createUserWithEmailAndPassword(auth, email, pw);
      console.log(response);
    } catch (err) {
      console.log(err);
      alert('SignUp failed: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const goToLogin = () => {
    navigation.navigate('Login');
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
          <Button title="SignUp" onPress={SignUp} />
          <Button title="Go to login" onPress={goToLogin} />
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
