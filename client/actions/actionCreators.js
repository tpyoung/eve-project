const $ = require('jquery');

// test action
// export function getAllStateCarInfo (userState, maxPrice, bodyType) {
//   console.log('dispatching');
//   console.log(userState, maxPrice, bodyType);
//   return {
//     type: 'GET_ALL_STATE_CAR_INFO',
//     userState,
//     maxPrice,
//     bodyType
//   }
// }

export function getStateInfo (userState) {
  console.log('dispatching');
  let stateData;

    $.ajax({
      url: `/api/states/${userState}`,
      dataType: 'json',
      crossDomain: true,
      cache: false,
      success: function (data) {
        console.log('data: ', data);
        stateData = data;
      },
      error: function (xhr, status, err) {
        console.error(err);
      }
    });

    return {
      type: 'GET_STATE_INFO',
      stateData
    }
}