import "./App.css";
import React, { Component } from "react";
import data from "./data"
import SearchBar from "./components/SearchBar";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    
    return (
      <div className="App">
        <SearchBar data={data}/>
      </div>
    );
  }
}

export default App;
