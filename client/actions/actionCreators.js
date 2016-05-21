const $ = require('jquery');
import store from '../store';

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

// export function getStateInfo (userState) {
//   console.log('dispatching');

//   let stateData; 

//     $.ajax({
//       url: `http://localhost:3000/api/states/${userState}`,
//       dataType: 'json',
//       crossDomain: true,
//       cache: false,
//       success: function (data) {
//         console.log('data: ', data);
//       },
//       error: function (xhr, status, err) {
//         console.error(err);
//       }
//     });

//    console.log('stateData: ', stateData); 

//     return {
//       type: 'GET_STATE_INFO',
//       stateData
//     }
// }

function requestStateInfo (userState) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `/api/states/${userState}`,
      dataType: 'json',
      crossDomain: true,
      cache: false,
      success: function (data) {
        console.log('data: ', data);
        return resolve(data);
      },
      error: function (xhr, status, err) {
        reject(err);
      }
    });
  })
}

export function getStateInfo (userState) {
  console.log('dispatching');
  return function (dispatch) {
    requestStateInfo(userState).then((data) => {
      dispatch({
        type: 'GET_STATE_INFO',
        data
      })
    })
  } 
}
