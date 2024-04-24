// jest.mock('ScrollView', () => jest.genMockFromModule('ScrollView'));
export const StyleSheet = jest.mock('react-native', () => {
    return {
      StyleSheet: {
        create: () => ({}),
      },
    };
  });
