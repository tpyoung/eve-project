import React from 'react';

const Car = React.createClass({
  getInitialState() {
    return {
      gasIndex: 0  
    }
  },
  nextCar: function () {
    let currIndex = this.state.gasIndex;
    if (currIndex+1 !== this.props.gasCars.length) {
      this.setState({gasIndex: currIndex+1})
    }
  },
  prevCar: function () {
    let currIndex = this.state.gasIndex;
    if (currIndex-1 >= 0) {
      this.setState({gasIndex: currIndex-1})
    }
  },
  getSingleCar: function () {
    const style = {
      backgroundColor: 'pink'
    }
    return (
      <div className="gasCar" style={style}>
        {this.props.gasCars[this.state.gasIndex].manufacturer} 
        {this.props.gasCars[this.state.gasIndex].model}<br/>
        {this.props.gasCars[this.state.gasIndex].msrp}<br/>
        {this.props.gasCars[this.state.gasIndex].mpgmpge.gas}<br/>
        <button onClick={this.prevCar}>left</button>
        <button onClick={this.nextCar}>right</button>        
      </div>
    )
  },
  render: function () {
    return (
      <div>
      {this.props.gasCars[0] && this.getSingleCar()} 
      </div>
    )
  }
})

Car.defaultProps = {
  gasCars: []
}


export default Car;
