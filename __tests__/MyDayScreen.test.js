import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MyDayScreen from '../app/screens/MyDayScreen'
import '../__mocks__/setupTest.js'


const ScrollView = jest.mock('ScrollView', () => jest.genMockFromModule('ScrollView'));




describe('<MyDayScreen />', () => {
  test('renders header correctly', () => {
    const { getByTestId } = render(<MyDayScreen />);
    const header = getByTestId('headerComponent');
    expect(header).toBeDefined();
  });

//  test('renders list items correctly', () => {
//    const { getByTestId, getAllByTestId } = render(<TodoScreen />);
//    const listContainer = getByTestId('todo-list');
//    const listItems = getAllByTestId('todo-item');
//    expect(listContainer).toBeDefined();
//    expect(listItems.length).toBeGreaterThan(0);
//  });

//  test('renders modal correctly', () => {
//    const { getByTestId } = render(<TodoScreen />);
//    const modalButton = getByTestId('open-modal-button');
//    fireEvent.press(modalButton);
//    const modal = getByTestId('todo-modal');
//    expect(modal).toBeDefined();
//  });

//  test('adds new item to list on modal submission', () => {
//    const { getByTestId, getAllByTestId } = render(<TodoScreen />);
//    const modalButton = getByTestId('open-modal-button');
//    fireEvent.press(modalButton);
//    const modalTextInput = getByTestId('modal-text-input');
//    fireEvent.changeText(modalTextInput, 'New Todo Item');
//    const submitButton = getByTestId('modal-submit-button');
//    fireEvent.press(submitButton);
//    const listItems = getAllByTestId('todo-item');
//    expect(listItems.length).toBeGreaterThan(0); // Assuming new item is added successfully
//  });

  // Add more tests as needed for various functionalities of TodoScreen
});
