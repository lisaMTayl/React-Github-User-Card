import React, { Component } from "react";
import "../src/App.css";
import SearchForm from "./components/SearchForm";
import UserCard from "./components/UserCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      didSubmit: false
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = () => {
    this.setState({
      didSubmit: true
    });
  };

  handleChange = (e) => {
    this.setState({
      searchQuery: e.target.value,
      didSubmit: false
    });
  };

  render() {
    return (
      <div className="App">
        <SearchForm
          onChange={this.handleChange}
          onClick={this.handleSubmit}
          value={searchQuery}
        />
        {this.state.didSubmit && <UserCard username={searchQuery} />}
      </div>
    );
  }
}

export default App;
