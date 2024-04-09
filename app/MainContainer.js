import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SignupScreen from './screens/SignUpScreen'
import MyDayScreen from './screens/MyDayScreen';
import TodoScreen from './screens/TodoScreen';


const Tab = createMaterialBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName='MyDay'
            screenOptions={ ({ route }) => ({
              tabBarIcon({focused, color}) {
                let iconName;
                let rn = route.name;
      
                if (rn === "Home") iconName = focused ? 'home': 'home-outline';
                else if (rn === "MyDay") iconName = focused ? 'list': 'list-outline';
                else if (rn === "Settings") iconName = focused ? 'settings': 'settings-outline';
    
                return <Ionicons name = {iconName} size = {30} color = {color} />
              },
            })}
    
          >
            <Tab.Screen
              name="Home"
              component={TodoScreen} />
            <Tab.Screen
              name="MyDay" component={MyDayScreen} />
            <Tab.Screen 
             name="Settings" component={SignupScreen} />
    
          </Tab.Navigator>
        </NavigationContainer>
      );
}