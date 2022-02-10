import "./App.css";
import React, { Component } from "react";
import data from "./data"
import SearchBar from "./components/SearchBar";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      filteredBooks: []
    };
  }

  handleFilter = (e) => {
    const searchedWord = e.target.value;
    this.setState({inputValue: searchedWord})
    const newArray = data.filter(book => {
      return book.title.toLowerCase().includes(searchedWord.toLowerCase())
    })

    if (searchedWord === "") {
      this.setState({filteredBooks: []})
    } else {
      this.setState({filteredBooks: newArray})
    }
  }

  handleClick = () => {
    this.setState({inputValue: "", filteredBooks: []})
  }

  render() {
    const {inputValue, filteredBooks} = this.state;
    
    return (
      <div className="App">
        <SearchBar data={data} inputValue={inputValue} func={this.handleFilter} filteredBooks={filteredBooks} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
