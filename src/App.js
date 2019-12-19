import React, { Component } from "react";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import ButtonComponent from "./ButtonComponent/ButtonComponent";
import SetOfButton from "./SetOfButtons/SetOfButton";

import "./App.css";

class App extends Component {
  state = {
    valueToShow: "",
    set1: [9, 8, 7, "/"],
    set2: [6, 5, 4, "*"],
    set3: [3, 2, 1, "-"],
    set4: [".", 0, "CC", "+"],
    operation: "",
    equal: false,
    previousValue: 0
  };

  callTypeHandler = event => {
    let value = event.target.value;
    let operation = ["/", "*", "-", "+", "="];
    if (operation.includes(value.charAt(value.length - 1))) {
      this.buttonHandler(value.charAt(value.length - 1));
    } else {
      this.setState({
        valueToShow: event.target.value
      });
    }
    if (event.key === "Enter") {
      this.buttonHandler("=");
    }
  };

  buttonHandler = value => {
    if (value === "=") {
      this.doOperationAndStore(true);
    } else if (value === "/") {
      this.setState({
        previousValue: this.state.valueToShow,
        operation: value,
        valueToShow: ""
      });
    } else if (value === "*") {
      this.setState({
        previousValue: this.state.valueToShow,
        operation: value,
        valueToShow: ""
      });
    } else if (value === "-") {
      this.setState({
        previousValue: this.state.valueToShow,
        operation: value,
        valueToShow: ""
      });
    } else if (value === "+") {
      this.setState({
        previousValue: this.state.valueToShow,
        operation: value,
        valueToShow: ""
      });
    } else if (value === "CC") {
      this.setState({
        previousValue: 0,
        operation: value,
        valueToShow: ""
      });
    } else {
      let valueDisplayed = this.state.valueToShow;
      if (valueDisplayed == 0) {
        valueDisplayed = "";
      }
      this.setState({
        valueToShow: valueDisplayed.toString().concat(value)
      });
    }
  };

  doOperationAndStore(isEqual) {
    var newValue = 0;

    if (isEqual) {
      let firstInput = this.state.previousValue;
      if (this.state.operation === "/" && firstInput != 0) {
        newValue = firstInput / this.state.valueToShow;
      }
      if (this.state.operation === "*" && firstInput != 0) {
        newValue = firstInput * this.state.valueToShow;
      }
      if (this.state.operation === "-") {
        newValue = firstInput - this.state.valueToShow;
      }
      if (this.state.operation === "+") {
        newValue = +firstInput + +this.state.valueToShow;
      }
      if (this.state.operation === "CC" || this.state.operation === "") {
        newValue = +this.state.valueToShow;
      }
    }

    isNaN(newValue) ? alert("Please Enter Number") : this.setState({
      previousValue: this.state.valueToShow,
      operation: "",
      valueToShow: newValue
    });
}

  clearAction() {
    this.setState({
      valueToShow: this.state.valueToShow.toString().slice(0, -1)
    });
  }

  clearAllAction() {
    this.setState({
      valueToShow: ""
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Calculator App</h1>
        <hr></hr>
        <UserInput
          callTypeHandler={this.callTypeHandler}
          value={this.state.valueToShow}
        ></UserInput>
        <hr></hr>
        <SetOfButton
          values={this.state.set1}
          setTheValues={this.buttonHandler}
        ></SetOfButton>
        <SetOfButton
          values={this.state.set2}
          setTheValues={this.buttonHandler}
        ></SetOfButton>
        <SetOfButton
          values={this.state.set3}
          setTheValues={this.buttonHandler}
        ></SetOfButton>
        <SetOfButton
          values={this.state.set4}
          setTheValues={this.buttonHandler}
        ></SetOfButton>
        <ButtonComponent
          buttonHandler={this.clearAllAction.bind(this, "Clear")}
          value="Clear All"
        ></ButtonComponent>
        <ButtonComponent
          buttonHandler={this.clearAction.bind(this, "Clear")}
          value="Clear"
        ></ButtonComponent>
        <ButtonComponent
          buttonHandler={this.buttonHandler.bind(this, "=")}
          value="="
        ></ButtonComponent>
      </div>
    );
  }
}

export default App;

/*else if (this.state.operation === "*") {
  newValue = previousValue * value;
  console.log(newValue);
} else if (this.state.operation === "-") {
  newValue = previousValue - value;
} else if (this.state.operation === "+") {
  newValue = previousValue + value;
}*/
