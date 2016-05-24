'use strict';

import React from 'react';
import c3 from '../resources/c3';

const EpaGHGRatingGraph = React.createClass({
  renderChart: function(){
    var rating = this.props.fuelEconomyGHGRating;
    var chart = c3.generate({
      bindto: "#EpaGHGRatingGraph",
        data: {
            columns: [
                ['rating', 5]
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

    // setTimeout(function () {
    //     chart.load({
    //         columns: [['rating', rating]]
    //     });
    // }, 1500);
  }, //ends RENDER CHART
  render: function() {
    if (this.renderChart() !== null){
      this.renderChart();
      return (
        <div className="EpaGHGRatingGraph">
          <h3>EPA Greenhouse Gas and Fuel Economy Rating</h3>
          <div id="EpaGHGRatingGraph"></div>
        </div>
      )
    }
  }
});

export default EpaGHGRatingGraph;
