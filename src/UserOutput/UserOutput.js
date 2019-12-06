import React, { Component } from "react";

class UserOutput extends Component {
  render(props) {
    return (
      <div>
        <p>{this.props.valueToShow}</p>
      </div>
    );
  }
}

export default UserOutput;
