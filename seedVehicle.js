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
        energyPer100Miles: vehicleData.energyPer100Miles,
        maintenance: vehicleData.maintenance,
        annualFuelCost: vehicleData.annualFuelCost,
        fuelEconomyGHGRating: vehicleData.fuelEconomyGHGRating,
        gasComparableManufacturer: vehicleData.gasComparableManufacturer,
        gasComparableModel: vehicleData.gasComparableModel,
        hybridComparableManufacturer: vehicleData.hybridComparableManufacturer,
        hybridComparableModel: vehicleData.hybridComparableModel,
        photoLink: vehicleData.photoLink
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
        energyPer100Miles: vehicleData.energyPer100Miles,
        maintenance: vehicleData.maintenance,
        annualFuelCost: vehicleData.annualFuelCost,
        fuelEconomyGHGRating: vehicleData.fuelEconomyGHGRating,
        gasComparableManufacturer: vehicleData.gasComparableManufacturer,
        gasComparableModel: vehicleData.gasComparableModel,
        photoLink: vehicleData.photoLink
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
        energyPer100Miles: vehicleData.energyPer100Miles,
        maintenance: vehicleData.maintenance,
        annualFuelCost: vehicleData.annualFuelCost,
        fuelEconomyGHGRating: vehicleData.fuelEconomyGHGRating,
        photoLink: vehicleData.photoLink
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