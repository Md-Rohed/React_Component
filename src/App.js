import SearchBar from "./component/SearchBar";
import axios from "axios";
import React, { Component } from "react";

export default class App extends Component {
  onSearchSubmit(input) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: input },
      headers: {
        Authorization: "Client-ID MX32KIhRmXMLgpue-cDsexGa88b6AoHg9vfTPobQPOM",
      },
    });
  }
  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
