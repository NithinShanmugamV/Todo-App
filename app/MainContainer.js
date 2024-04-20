import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignupScreen from './screens/SignUpScreen';
import MyDayScreen from './screens/MyDayScreen';
import TodoScreen from './screens/TodoScreen';
import LoginScreen from './screens/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import {onAuthStateChanged} from 'firebase/auth';
import {FIREBASE_AUTH} from './FirebaseConfig';
import {UserContext} from './context/UserContextProvider';
import ProfileScreen from './screens/ProfileScreen';
// import User from 'firebase/auth'

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Profile = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default function MainContainer() {
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, user => {
      setUser(user);
    });
  }, [user]);
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="MyDay"
        screenOptions={({route}) => ({
          tabBarIcon({focused, color}) {
            let iconName;
            let rn = route.name;

            if (rn === 'Home') iconName = focused ? 'home' : 'home-outline';
            else if (rn === 'MyDay')
              iconName = focused ? 'view-list' : 'view-list-outline';
            else if (rn === 'Profile')
              iconName = focused ? 'account' : 'account-outline';
            else if (rn === 'Auth')
              iconName = focused ? 'account' : 'account-outline';

            return (
              <MaterialCommunityIcons name={iconName} size={30} color={color} />
            );
          },
        })}>
        <Tab.Screen name="Home" component={TodoScreen} />
        <Tab.Screen name="MyDay" component={MyDayScreen} />
        {/* <Tab.Screen name="Profile" component={ProfileScreen}/> */}
        {user ? (
          <Tab.Screen name="Profile" component={ProfileScreen} />
        ) : (
          <Tab.Screen name="Auth" component={Profile} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
