// File: __mocks__/react-native-gesture-handler.js

import React from 'react';

// Mocked Gesture Handler components
export const TouchableOpacity = ({ children }) => <div>{children}</div>;
export const ScrollView = ({ children }) => <div>{children}</div>;
// Add more mocked components as needed

// Mocked createNativeWrapper function
export const createNativeWrapper = jest.fn();

// Mocked gesture handler methods
export const gestureHandlerRootHOC = jest.fn();

// Mocked gesture handler modules
export const GestureHandlerRootView = jest.fn();
export const Directions = jest.fn();
export const State = jest.fn();
export const PanGestureHandler = jest.fn();
// Add more mocked modules as needed
