import React from 'react';

const Comments = React.createClass({

  render() {  // <------------------- insert applicable states and index into render function
    return (
      var gasAmount = 45; // <------- filler data, replace with: { PROP NAME HERE }
      var hybridAmount = 76; // <---- filler data, replace with: { PROP NAME HERE }
      var electricAmount = 143; // <- filler data, replace with: { PROP NAME HERE }

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
              ['Gas', gasAmount],
              ['Hybrid', 0],
              ['Electric', 0]
            ]
          })
        }, 600);
          setTimeout(function () {
          chart.load({
            columns: [
              ['Gas', gasAmount],
              ['Hybrid', hybridAmount],
              ['Electric', 0]
            ]
          })
        }, 900);
            setTimeout(function () {
          chart.load({
            columns: [
              ['Gas', gasAmount],
              ['Hybrid', hybridAmount],
              ['Electric', electricAmount]
            ]
          })
        }, 1200);
  )};
});