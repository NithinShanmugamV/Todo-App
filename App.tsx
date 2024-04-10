/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import MainContainer from './app/MainContainer';
import UserContextProvider from './app/Context/UserContextProvider';






export default function App() {

  return (
    <UserContextProvider>
      <MainContainer /></UserContextProvider>
  );
}

