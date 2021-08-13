const initialState = {
  data: [],
};

export function dataReducer(state = initialState, action) {
  switch (action.type) {
  case 'GET_DATA':
    return {...state, data: [1, 2, 3]};
  case 'SET_DATA':
    console.log(action);
    return {...state, data: action.payload};
  default:
    return state;
  }
}
