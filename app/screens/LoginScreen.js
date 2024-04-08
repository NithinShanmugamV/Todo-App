import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function () {

    const signInWithGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
            await auth().signInWithCredential(googleCredential);
            console.log('User signed in with Google successfully');
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // User cancelled the sign-in process
                console.log('Google sign-in cancelled');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // Sign-in is already in progress
                console.log('Google sign-in is already in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // Play Services not available or outdated
                console.log('Google Play Services not available or outdated');
            } else {
                // Other errors
                console.error('Google sign-in error:', error);
            }
        }
    };


    return (
        <View style={styles.container}>
            <Button title="Sign up with Google" onPress={signInWithGoogle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    }
})