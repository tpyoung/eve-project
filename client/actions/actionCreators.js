const $ = require('jquery');
import store from '../store';

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
