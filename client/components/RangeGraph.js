'use strict';



/* WE NEED TO ARRANGE THIS SO THE TWO
    NUMBERS FOR THE HYBRID VEHICLES
    SHOW UP TOGETHER -- HYBRID HAS BOTH
    GAS AND ELECTRIC SO THERE NEEDS TO
    BE A CHANGE MADE ON THIS GRAPH
    BEFORE IT ACCURATELY REFLECTS THE
    RANGE
*/



import React from 'react';

const RangeGraph = React.createClass({

  render() {  // <------------------- insert applicable states and index into render function
    return (
      var gasRange = {this.props.gasRange}; // <------- filler data, replace with: { PROP NAME HERE }
      var hybridRange = {this.props.hybridRange}; // <---- filler data, replace with: { PROP NAME HERE }
      var electricRange = {this.props.electricRange}; // <- filler data, replace with: { PROP NAME HERE }

      var chart = c3.generate({
          data: {
              columns: [
                  ['Gas', 0],
                  ['Hybrid', 0],
                  ['Electric', 0]
              ],
              types: {
                  Gas: 'bar',
                  Hybrid: 'bar',
                  Electric: 'bar'
              },
              colors: {
                Gas: '#FE944C',
                Hybrid: '#414F6E',
                Electric: '#9ED073'
              },
              transition: {
                duration: 2000
              }
          },
          axis: {
              rotated: true,
              x: {show:false},
              y: {show:false}
          },
          tooltip: {
        format: {
          title: function () { return 'Vehicle Range (Miles)'; }
        }
      }
      });
        setTimeout(function () {
          chart.load({
            columns: [
              ['Gas', gasRange],
              ['Hybrid', 0],
              ['Electric', 0]
            ]
          })
        }, 600);
          setTimeout(function () {
          chart.load({
            columns: [
              ['Gas', gasRange],
              ['Hybrid', hybridRange],
              ['Electric', 0]
            ]
          })
        }, 900);
            setTimeout(function () {
          chart.load({
            columns: [
              ['Gas', gasRange],
              ['Hybrid', hybridRange],
              ['Electric', electricRange]
            ]
          })
        }, 1200);
  )};
});

export default RangeGraph;