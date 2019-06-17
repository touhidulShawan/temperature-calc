import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "../components/BoilingVerdict";

function toCelsius(fahrenheight) {
  return ((fahrenheight - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function ConvertTemp(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends Component {
  state = {
    temperature: "",
    scale: "c"
  };

  handleCelsiusChange = temperature => {
    this.setState({ scale: "c", temperature });
  };

  handleFahrenheitChange = temperature => {
    this.setState({ scale: "f", temperature });
  };

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius =
      scale === "f" ? ConvertTemp(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? ConvertTemp(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}

export default Calculator;
