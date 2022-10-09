import SearchBar from "./component/SearchBar";
import axios from "axios";
import React, { Component } from "react";
import { ImageList } from "./component/ImageList";

export default class App extends Component {
  state = { image: [] };
  onSearchSubmit = async (input) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: input },
      headers: {
        Authorization: "Client-ID MX32KIhRmXMLgpue-cDsexGa88b6AoHg9vfTPobQPOM",
      },
    });
    this.setState({ image: response.data.results });
  };
  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList image={this.state.image} />
      </div>
    );
  }
}
