import React, { Component } from "react";

const scalesName = {
  c: "Celsius",
  f: "Fahrenheit"
};

class Temperature extends Component {
  handleChange = event => {
    const temp = event.target.value;
    this.props.onTemperatureChange(temp);
  };

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scalesName[scale]}:</legend>
        <input
          type="text"
          name="celsius"
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

export default Temperature;
