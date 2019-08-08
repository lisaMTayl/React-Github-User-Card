import React, { Component } from "react";
import "./App.css";

import UserCard from "./components/UserCard";
import Followers from "./components/Followers";

import Container from "@material-ui/core/Container";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: [],
      followers: []
    }

  }

  componentDidMount() {
    this.fetchUser();
  }

  handleChange = () => {

  };

  fetchUser = () => {
    const urls = [
      'https://api.github.com/users/lisaMTayl',
      'https://api.github.com/users/lisaMTayl/followers'
    ]
    Promise.all(urls.map(url => fetch(url)
      .then(res => res.json())
      .catch(err => console.error('Request failed', err))
    ))
      .then(data => this.setState({
        user: data[0],
        followers: data[1]
      }))

  };



  render() {
    return (
      <Container maxWidth="sm" alignItems="center">
        <h2>{this.state.name}</h2>
        <p>{this.state.public_repos}</p>
        <UserCard key={this.state.login} {...this.state.user}/>
        <Followers followers={this.state.followers}/>
      </Container>
    );
  }

}

export default App;
