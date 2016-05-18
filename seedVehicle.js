'use strict';
const mongoose = require('mongoose'),
        Schema = mongoose.Schema,
         vehicle = require('./data/stateData.json'),
         Vehicle = require('./models/State');

function vehicleSeed(){
  vehicle.forEach((vehicleData) => {
    if (vehicleData.type === "electric"){
      let indVehicle = new Vehicle({
        country: vehicleData.country,
        manufacturer: vehicleData.manufacturer,
        model: vehicleData.model,
        body: vehicleData.body,
        power: vehicleData.power,
        msrp: vehicleData.msrp,
        mpgmpge: vehicleData.mpgmpge,
        range: vehicleData.range,
        maintenance: vehicleData.maintenance,
        gasComparableManufacturer: vehicleData.gasComparableManufacturer,
        gasComparableModel: vehicleData.gasComparableModel,
        hybridComparableManufacturer: vehicleData.hybridComparableManufacturer,
        hybridComparableModel: vehicleData.hybridComparableModel,
      });
    }
    else {
      let indVehicle = new Vehicle({
        country: vehicleData.country,
        manufacturer: vehicleData.manufacturer,
        model: vehicleData.model,
        body: vehicleData.body,
        power: vehicleData.power,
        msrp: vehicleData.msrp,
        mpgmpge: vehicleData.mpgmpge,
        range: vehicleData.range,
        maintenance: vehicleData.maintenance
    };

    indVehicle.save((err, indVehicle) => {
      if (err) {
        return console.log(err);
      }
      else {
        console.log("vehicle saved!")
      }
    })
  });
}

module.exports = vehicleSeed;