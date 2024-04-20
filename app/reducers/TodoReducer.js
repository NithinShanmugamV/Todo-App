export const TodoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      state = [
        ...state,
        {
          text: action.payload.text,
          key: state.length,
          completed: false,
          important: action.payload.important,
          description: '',
          endDate: action.payload.date,
          myDay: action.payload.myDay,
        },
      ];
      return state;
    case 'REMOVE_TODO':
      const handlerRemoveItem = key => {
        return state.filter(todo => todo.key != key);
      };
      return handlerRemoveItem(action.payload);
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.key === action.payload
          ? {...todo, completed: !todo.completed}
          : todo,
      );
    default:
      return state;
  }
};
