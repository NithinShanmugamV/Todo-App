// __mocks__/firebase/auth.js

export const getAuth = jest.fn();

export const signInWithEmailAndPassword = jest.fn((auth, email, password) => {
  // Mock implementation here
});

export const createUserWithEmailAndPassword = jest.fn((auth, email, password) => {
  // Mock implementation here
});

// Add other auth methods as needed
