function allCarsReducer (state = [], action) {
  switch (action.type) {
    case 'GET_ALL_STATE_CAR_INFO':
    console.log('getting all state and car info');
    console.log(action.userState, action.maxPrice, action.bodyType);
    console.log(state);
      return (
        [...state, {
        userState: action.userState,
        maxPrice: action.maxPrice,
        bodyType: action.bodyType 
        }] 
      )
    default:
      return state; 
  }
  return state;
}

export default allCarsReducer;