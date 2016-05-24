import React from 'react';
import c3 from '../resources/c3';

const CostAnalysisGraph = React.createClass({
  getInitialState() {
      return {
          count: 10
      };
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.currGasCar) {
      // this.chart.unload();
      // this.renderChart(nextProps.currGasCar);
      console.log('nextProps: ', nextProps.currGasCar);
      console.log('this.chart: ', this.chart);
          this.chart.load({
            columns: [
              ['Initial Investment', nextProps.currGasCar.msrp/6],
              ['Maintenance', nextProps.currGasCar.annualFuelCost],
              ['Energy Costs', nextProps.currGasCar.maintenance]
            ]
            // columns: [
            //   ['Initial Investment', this.state.count],
            //   ['Maintenance', this.state.count+Math.random()*10+1],
            //   ['Energy Costs', this.state.count+Math.random()*10+1]
            // ]
          })
      //     this.setState({count: this.state.count+10})
          // console.log('this.state.count: ', this.state.count);
      }else {

      console.log('sdlkfjsdlkfj');
      }
        
  },
  // handleClick(event) {
  //   event.preventDefault();
  //   if (this.chart) {
  //     console.log('helloooooo');
  //     this.chart.load({
  //             bindto: 'costAnalysisGraph',
  //             columns: [
  //               ['Initial Investment', this.state.count],
  //               ['Maintenance', this.state.count+Math.random()*10+1],
  //               ['Energy Costs', this.state.count+Math.random()*10+1]
  //             ]
  //           })
  //   }

  // },
  // componentDidMount() {
  //   console.log('this.props.currGasCar: ', this.props.currGasCar);
  //   if (this.props.currGasCar) {
  //     this.renderChart();
  //   } 
  // },
  renderChart(currGasCar) {
    // var initialInvestment = this.props.currGasCar.msrp / 6;
    // var annualFuelCost = this.props.currGasCar.annualFuelCost;
    // var maintenanceCost = this.props.currGasCar.maintenance;
    console.log('generating graph');
    console.log('currGasCar: ', currGasCar);
    // console.log('this.props.currGasCar: ', this.props.currGasCar);
    if (!this.chart) {
      
      this.chart = c3.generate({
          bindto: '#costAnalysisGraph',
          data: {
              columns: [
                  ['Initial Investment', currGasCar.msrp/6],
                  ['Maintenance', currGasCar.annualFuelCost],
                  ['Energy Costs', currGasCar.maintenance]
              ],
              // columns: [
              //     ['Initial Investment', 346567],
              //     ['Maintenance', 34234],
              //     ['Energy Costs', 767]
              // ],
              type : 'donut',
              onclick: function (d, i) {  },
              onmouseover: function (d, i) {  },
              onmouseout: function (d, i) {  }
          },
          donut: {
              title: "Annual Fuel Cost"
          }
      });
    }

  },
  render() {
    console.log('in render');
    this.props.currGasCar ? this.renderChart(this.props.currGasCar) : null
    return (
      <div className="CostAnalysisGraph">
        <h3>ohhai cost analysis</h3>
        <div id="costAnalysisGraph"></div>
      </div>
    )
  }
})

        // <button onClick={this.handleClick.bind(this)}>next</button>
export default CostAnalysisGraph;
