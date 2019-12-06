import React, { Component } from "react";

import ButtonComponent from "../ButtonComponent/ButtonComponent";

class SetOfButton extends Component {
  buttonHandler = value => {
    this.props.setTheValues(value);
  };

  render(props) {
    return (
      <div>
        <ButtonComponent
          buttonHandler={this.buttonHandler.bind(this, this.props.values[0])}
          value={this.props.values[0]}
        ></ButtonComponent>
        <ButtonComponent
          buttonHandler={this.buttonHandler.bind(this, this.props.values[1])}
          value={this.props.values[1]}
        ></ButtonComponent>
        <ButtonComponent
          buttonHandler={this.buttonHandler.bind(this, this.props.values[2])}
          value={this.props.values[2]}
        ></ButtonComponent>
        <ButtonComponent
          buttonHandler={this.buttonHandler.bind(this, this.props.values[3])}
          value={this.props.values[3]}
        ></ButtonComponent>
      </div>
    );
  }
}

export default SetOfButton;
