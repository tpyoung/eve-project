function allCarsReducer (state = [], action) {
  switch (action.type) {
    case 'GET_ALL_STATE_CAR_INFO':
      console.log('get all state car info');
      return [...state, {
        userState: action.userState,
        maxPrice: action.maxPrice,
        bodyType: action.bodyType
      }];
    default:
      return state; 
  }
}

export default allCarsReducer;