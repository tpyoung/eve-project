function allCarsReducer (state = [], action) {
  switch (action.type) {
    // test action
    // case 'GET_ALL_STATE_CAR_INFO':
    // console.log('getting all state and car info');
    // console.log(action.userState, action.maxPrice, action.bodyType);
    // console.log(state);
    //   return (
    //     [...state, {
    //     userState: action.userState,
    //     maxPrice: action.maxPrice,
    //     bodyType: action.bodyType 
    //     }] 
    //   )
    case 'GET_STATE_INFO':
      console.log('getting state info'); 
      return (
        [...state, {
          stateData: action.data[0]
        }]
      )
    default:
      return state; 
  }
  return state;
}

export default allCarsReducer;