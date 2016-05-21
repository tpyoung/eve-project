function vehicleReducer (state = [], action) {
  switch (action.type) {
    case 'GET_CAR_INFO':
      return (action.data)
    default:
      return state; 
  }
  return state;
}




export default vehicleReducer;