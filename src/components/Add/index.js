import "./style.css";
import React, { Component } from "react";

export default class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  change = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  add = () => {
    this.state.text.trim().length > 0 && this.props.addCallBC(this.state.text);
    this.setState({
      text: "",
    });
  };
  render() {
    return (
      <div className="header">
        <input
          id="task"
          className="new-todo"
          type="text"
          onChange={this.change}
          value={this.state.text}
        />
        <button id="btn" onClick={this.add}>
          {this.props.buttonText}
        </button>
      </div>
    );
  }
}
