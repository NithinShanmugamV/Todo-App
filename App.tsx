/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import MainContainer from './app/MainContainer';
import TaskContextProvider from './app/Context/TaskContextProvider';

export default function App() {
  return (
    <TaskContextProvider>
      <MainContainer />
    </TaskContextProvider>
  );
}
