import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { input: "" };
  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form
          style={{ border: "1px solid ", padding: "10px", margin: "10px" }}
          onSubmit={this.handleSubmit}
        >
          <label> Search For Image:</label>
          <br />
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
            style={{ width: "100%", padding: "10px" }}
          />
          <p>{this.state.input}</p>
        </form>
      </div>
    );
  }
}
//hello
