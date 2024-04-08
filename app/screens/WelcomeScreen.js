import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style = {styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/image.png")} />
        <Text>Sell what you want</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>

    </ImageBackground>
  );

}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65"
  },

  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4"
  },

  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems:"center"
  },

  logo: {
    width: 100,
    height: 100,
  }
})