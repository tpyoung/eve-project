'use strict';

import React from 'react';

const MaintenanceGraph = React.createClass({

  render() {  // <------------------- insert applicable states and index into render function

    return (
      var gasMaintCost = this.props.gasMaintCost;
      var hybridMaintCost = this.props.hybridMaintCost;
      var elecMaintCost = this.props.elecMaintCost;
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
          title: function () { return 'Maintenance Cost (dollars)'; }
        }
      }
      });
        setTimeout(function () {
          chart.load({
            columns: [
              ['Gas', gasMaintCost],
              ['Hybrid', 0],
              ['Electric', 0]
            ]
          })
        }, 600);
          setTimeout(function () {
          chart.load({
            columns: [
              ['Gas', gasMaintCost],
              ['Hybrid', hybridMaintCost],
              ['Electric', 0]
            ]
          })
        }, 900);
            setTimeout(function () {
          chart.load({
            columns: [
              ['Gas', gasMaintCost],
              ['Hybrid', hybridMaintCost],
              ['Electric', elecMaintCost]
            ]
          })
        }, 1200);
  )};
});

export default MaintenanceGraph;
