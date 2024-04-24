const createNativeStackNavigator = jest.fn(() => ({
  Navigator: jest.fn().mockReturnValue(null),
  Screen: jest.fn().mockReturnValue(null),
  create: jest.fn().mockReturnValue(null),
}));

export default createNativeStackNavigator;
