import React, { PureComponent } from "react";

class purecomp extends PureComponent {
  state = {
    name: "Habib",
  };

  /*   shouldComponentUpdate(nextProps, nextState) {
    if (nextState.name === this.state.name) {
      return false;
    }
    return true;
  } */
  render() {
    console.log("render");
    return (
      <div>
        <h2>{this.state.name}</h2>

        <button onClick={() => this.setState({ name: "Lisa" })}>
          click to change
        </button>
      </div>
    );
  }
}
export default purecomp;
