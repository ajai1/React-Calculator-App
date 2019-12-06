import React, { Component } from "react";

class ButtonComponent extends Component {
  render(props) {
    return (
      <button
        class="btn btn-default btn-lg"
        type="submit"
        onClick={this.props.buttonHandler}
      >
        {this.props.value}
      </button>
    );
  }
}

export default ButtonComponent;
