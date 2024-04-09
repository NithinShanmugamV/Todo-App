import React from 'react';
import { View, Button } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';

const SignupScreen = () => {
//   const signInWithGoogle = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
//       await auth().signInWithCredential(googleCredential);
//       console.log('User signed in with Google successfully');
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         // User cancelled the sign-in process
//         console.log('Google sign-in cancelled');
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         // Sign-in is already in progress
//         console.log('Google sign-in is already in progress');
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         // Play Services not available or outdated
//         console.log('Google Play Services not available or outdated');
//       } else {
//         // Other errors
//         console.error('Google sign-in error:', error);
//       }
//     }
//   };

  return (
    <View>
     
      <Button title="Sign in with Google" />
    </View>
  );
};

export default SignupScreen;
