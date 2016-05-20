'use strict';

import React from 'react';

const EpaGHGRatingGraph = React.createClass({

  render() {  // <------------------- insert applicable states and index into render function

    return (
      var rating = this.props.fuelEconomyGHGRating;
      var chart = c3.generate({
          data: {
              columns: [
                  ['rating', 0]
              ],
              type: 'gauge',
              onclick: function (d, i) { console.log("onclick", d, i); },
              onmouseover: function (d, i) { console.log("onmouseover", d, i); },
              onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
          color: {
              pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'],
              threshold: {
              // unit: 'value', // percentage is default
              // max: 200, // 100 is default
                  values: [30, 60, 90, 100]
              }
          },
          size: {
              height: 180
          }
      });

      setTimeout(function () {
          chart.load({
              columns: [['rating', rating]]
          });
      }, 1500);


  )};
});

export default EpaGHGRatingGraph;
