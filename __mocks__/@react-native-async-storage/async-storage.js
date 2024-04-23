// __mocks__/async-storage.js

const storage = {};

const AsyncStorage = {
  setItem: jest.fn((key, value) => {
    return new Promise((resolve, reject) => {
      storage[key] = value;
      resolve(null);
    });
  }),
  getItem: jest.fn(key => {
    return new Promise((resolve, reject) => {
      if (storage.hasOwnProperty(key)) {
        resolve(storage[key]);
      } else {
        resolve(null);
      }
    });
  }),
  removeItem: jest.fn(key => {
    return new Promise((resolve, reject) => {
      delete storage[key];
      resolve(null);
    });
  }),
  clear: jest.fn(() => {
    return new Promise(resolve => {
      storage = {};
      resolve(null);
    });
  }),
  getAllKeys: jest.fn(() => {
    return new Promise((resolve, reject) => {
      resolve(Object.keys(storage));
    });
  }),
};

export default AsyncStorage;
