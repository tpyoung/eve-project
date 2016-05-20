'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const vehicles = require('./data/vehicleData.json');
const Vehicle = require('./models/Vehicle');
let indVehicle = null;

function vehicleSeed(){
  vehicles.forEach((vehicleData) => {
    var count = 0;
    if (vehicleData.power === "Electric"){
      indVehicle = new Vehicle({
        id: count,
        country: vehicleData.country,
        manufacturer: vehicleData.manufacturer,
        model: vehicleData.model,
        body: vehicleData.body,
        power: vehicleData.power,
        msrp: vehicleData.msrp,
        mpgmpge: vehicleData.mpgmpge,
        range: vehicleData.range,
        maintenance: vehicleData.maintenance,
        annualFuelCost: vehicleData.annualFuelCost,
        gasComparableManufacturer: vehicleData.gasComparableManufacturer,
        gasComparableModel: vehicleData.gasComparableModel,
        hybridComparableManufacturer: vehicleData.hybridComparableManufacturer,
        hybridComparableModel: vehicleData.hybridComparableModel,
      });
    }
    else if (vehicleData.power === "Plug-In Hybrid"){
      indVehicle = new Vehicle({
        id: count,
        country: vehicleData.country,
        manufacturer: vehicleData.manufacturer,
        model: vehicleData.model,
        body: vehicleData.body,
        power: vehicleData.power,
        msrp: vehicleData.msrp,
        mpgmpge: vehicleData.mpgmpge,
        range: vehicleData.range,
        maintenance: vehicleData.maintenance,
        annualFuelCost: vehicleData.annualFuelCost,
        gasComparableManufacturer: vehicleData.gasComparableManufacturer,
        gasComparableModel: vehicleData.gasComparableModel
      });
    }
    else {
      indVehicle = new Vehicle({
        id: count,
        country: vehicleData.country,
        manufacturer: vehicleData.manufacturer,
        model: vehicleData.model,
        body: vehicleData.body,
        power: vehicleData.power,
        msrp: vehicleData.msrp,
        mpgmpge: vehicleData.mpgmpge,
        range: vehicleData.range,
        maintenance: vehicleData.maintenance,
        annualFuelCost: vehicleData.annualFuelCost
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
    count++
  });
 };

module.exports = vehicleSeed;