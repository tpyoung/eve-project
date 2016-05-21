function allCarsReducer (state = [], action) {
  switch (action.type) {
    case 'GET_STATE_INFO':
      console.log('getting state info'); 
      return (
        [...state,
          action.data[0]
        ]
      )
    default:
      return state; 
  }
  return state;
}

export default allCarsReducer;