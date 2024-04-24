// __mocks__/@react-navigation/material-bottom-tabs.js

// Mock implementation for @react-navigation/material-bottom-tabs module
const createMaterialBottomTabNavigator = jest.fn(() => ({
  Navigator: jest.fn().mockReturnValue(null),
  Screen: jest.fn().mockReturnValue(null),
  create: jest.fn().mockReturnValue(null)
}));

export default createMaterialBottomTabNavigator;
