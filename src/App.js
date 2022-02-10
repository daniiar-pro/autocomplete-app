import "./App.css";
import React, { Component } from "react";
import "./data"
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
        <SearchBar/>
      </div>
    );
  }
}

export default App;
