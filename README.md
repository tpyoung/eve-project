# E V E - Electric Vehicle Evaluator

---
![screencapture-eve-devleague-com-1465362813304](https://cloud.githubusercontent.com/assets/13547790/16079646/592e9438-32a0-11e6-8e59-e30ab7fd8c9d.png)

---
### Background
Electric Vehicle Evaluator (EVE) is an assistive selection tool for those looking at the benefits of purchasing an electric car. Through cross referencing various charging, distance, and emissions data within our databases, EVE provides users a more thorough understanding of often overlooked details in the vehicle purchasing process. One of the main focuses of this project is the initial and projected costs of owning a vehicle regardless of fuel type. With a wide selection of gas, hybrid, and electric vehicles tailored to their requests, EVE sets a precedent for future car comparisons.


### Data

#### Input


  - State Input
    - Allows users to see their state's incentives for own an electric vehicle
    - Creates a visualization of how much it costs to travel 100 miles:   -- it takes an average of the user's state's gas prices and compares that with their local electricity costs

  - Vehicle Type Input
    - Users can select from a selection of vehicle body types to fine tune their search and find the perfect fit for what              they'd like 

  - Budget Input
    - depending on the user's price range a different selection of vehicles will be listed as viable options 
    
  ##### Returned 

  - Array of cars in each category of fuel type (gas, hybrid, electric)
    - Users can flip through the car 'cards' to find on that match
    - Creates a visualization of how much it costs to travel 100 miles:   -- it takes an average of the user's state's gas prices and compares that with their local electricity costs

 - Basics
    - Model
    - MSRP    
    - The Miles Per Gallon (or Miles Per Gallon Equivalent)
    - Photo of the car
    - Fuel Type
    

  - 5 Year Maintenance Schedule
    - Using data projections created from past versions of the vehicle, we are able to create a projection map in the form of a line graph as to what the cost of upkeep could look like over the course of the next few years ('maintenance' includes repairs and regular maintenance)

- EPA's Greenhouse Gas and Fuel Economy Rating
    - On a scale of 10, the EPA rates cars' on their Greenhouse Gas and Fuel Economy.   EVE streamlines the approach to looking up how harmful a car's emissions can be and how large or small its footprint, (err... tireprint?) is on this planet.

- Cost To Drive 100 Miles
    - With this graph EVE shows a direct comparison of the cost of electricity to that of the required gasoline each car takes in relation to traveling 100 miles. It uses the user's state data to find an average of what will be paid for to make the journey

### API

For this project we also created an API so users can Access the data we've gathered and use it in their own project

> The instructions for this can be found at eve.devleague.com/api


### Tech

EVE is built on the React framework for the client-side with express on the server-side, we used a mongo database to store all of our accessible information. 

If you would like to contribute or make any changes to the project clone this repo down to a directory of your choice:

`git clone` 

install all of the dependencies

`npm install` 

and finally to get it running

`npm start`

#### Thank you looking into our project!
