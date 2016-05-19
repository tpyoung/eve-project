function allCarsReducer (state = [], action) {
  switch (action.type) {
    case 'GET_ALL_STATE_CAR_INFO':
      console.log('get all state car info');
    default:
      return state; 
  }
}

export default allCarsReducer;