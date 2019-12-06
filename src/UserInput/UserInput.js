import React, { Component } from "react";

class UserInput extends Component {
  render(props) {
    return (
      <div>
        <h2>Enter the Input below</h2>
        <input
          type="text"
          onChange={this.props.callTypeHandler}
          onKeyPress={this.props.callTypeHandler}
          value={this.props.value}
        ></input>
      </div>
    );
  }
}

export default UserInput;
