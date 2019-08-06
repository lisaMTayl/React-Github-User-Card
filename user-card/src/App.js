import React, { Component } from "react";
import "./App.css";

import UserCard from "./components/UserCard";
import Followers from "./components/Followers";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      didSubmit: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit() {
    this.setState({
      didSubmit: true
    });
  }
  onChange(event) {
    this.setState({
      searchQuery: event.target.value,
      didSubmit: false
    });
  }

  render() {

    return (
      <div>
        <UserCard/>
        <Followers/>
      </div>
    );
  }
}

export default App;
