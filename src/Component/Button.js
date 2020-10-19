import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <button type={this.props.type} style={{ margin: 10 }}>
        Login
      </button>
    );
  }
}
