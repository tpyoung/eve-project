import React from 'react';

const Dashboard = React.createClass({
  render() {
    return (
      <div className="dashboard">
        <form onSubmit = { this.handleSubmit }>
          <input type="text" value={this.state.userState} onChange={this.handleUserState} />
          
        </form>
      </div>
    )
  }
})