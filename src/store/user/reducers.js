const initialState = {};

export const user = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'UPDATE_USER':
      console.log('UPDATE_USER')
      return Object.assign({}, state, action.payload);
    default:
      console.log('default')
      return { ...state };
  }
}