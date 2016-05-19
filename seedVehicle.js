'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const vehicles = require('./data/vehicleData.json');
const Vehicle = require('./models/Vehicle');
let indVehicle = null;

function vehicleSeed(){
  vehicles.forEach((vehicleData) => {
    if (vehicleData.power === "Electric"){
      indVehicle = new Vehicle({
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
    else if (vehicleData.power === "Plug-In Hybrid"){
      indVehicle = new Vehicle({
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
        gasComparableModel: vehicleData.gasComparableModel
      });
    }
    else {
      indVehicle = new Vehicle({
        country: vehicleData.country,
        manufacturer: vehicleData.manufacturer,
        model: vehicleData.model,
        body: vehicleData.body,
        power: vehicleData.power,
        msrp: vehicleData.msrp,
        mpgmpge: vehicleData.mpgmpge,
        range: vehicleData.range,
        maintenance: vehicleData.maintenance
      });
    };

    indVehicle.save((err, indVehicle) => {
      if (err) {
        return console.log(err);
      }
      else {
        console.log("vehicle saved!");
      }
    });
  });
 };

module.exports = vehicleSeed;