export function getAllStateCarInfo (userState, maxPrice, bodyType) {
  console.log('dispatching');
  return {
    type: 'GET_ALL_STATE_CAR_INFO',
    userState,
    maxPrice,
    bodyType
  }
}