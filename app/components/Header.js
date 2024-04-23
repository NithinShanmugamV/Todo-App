import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function () {
  return (
    <View style={styles.logoContainer} id = "headerComponent">
      <Image style={styles.logo} source={require('../assets/todo.jpeg')} />
      <Text style={styles.logoText}>ToDo App</Text>
      <Image style={styles.profile} source={require('../assets/profile.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  logo: {
    width: 25,
    height: 25,
  },

  profile: {
    width: 50,
    height: 50,
  },
});
