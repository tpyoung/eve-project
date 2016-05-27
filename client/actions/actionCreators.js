'use strict';
import store from '../store';
const $ = require('jquery');

function requestStateInfo (userState) {
  return new Promise((resolve, reject) => {
    if(!userState) {
      // reject(new Error('Invalid Input'))
    } else {
    $.ajax({
      url: `/api/states/${userState}`,
      dataType: 'json',
      crossDomain: true,
      cache: false,
      success: function (data) {
        return resolve(data);
      },
      error: function (xhr, status, err) { 
        reject(err);
      }
    });
  }
  })
}

function requestCarInfo (maxPrice, bodyType) {
  return new Promise((resolve, reject) => {
    if(!maxPrice || !bodyType) {
    } else {
      $.ajax({
        url: `/api/vehicles/${maxPrice}/${bodyType}`,
        dataType: 'json',
        crossDomain: true,
        cache: false,
        success: function (data) {
          return resolve(data);
        },
        error: function (xhr, status, err) {
          reject(err);
        }
      });
    }
  })
}


export function getStateInfo (userState) {
  return function (dispatch) {
    requestStateInfo(userState).then((data) => {
      dispatch({
        type: 'GET_STATE_INFO',
        data
      })
    })
  } 
}

export function getCarInfo (maxPrice, bodyType) {
  return function (dispatch) {
    requestCarInfo(maxPrice, bodyType).then((data) => {
      dispatch({
        type: 'GET_CAR_INFO',
        data
      })
    })
  } 
}

