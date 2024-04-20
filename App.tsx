/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import MainContainer from './app/MainContainer';
import TaskContextProvider from './app/context/TaskContextProvider';
import 'react-native-gesture-handler';
import UserContextProvider from './app/context/UserContextProvider';

export default function App() {
  return (
    <UserContextProvider>
      <TaskContextProvider>
        <MainContainer />
      </TaskContextProvider>
    </UserContextProvider>
  );
}
