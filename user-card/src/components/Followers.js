import React, { Component } from "react";
import Loader from "./Loader";

export default class Followers extends Component {
  constructor() {
    super();

    this.state = {
      followers: []
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/users/lisaMTayl/followers")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          followers: data
        });
      })
      .catch(error => {
        this.setState({ error, isLoading: false }, () =>
          console.log("callback", error)
        );
      });
  }

  render() {
        return (
          this.state.followers.map(e => {
            return ( <div>
              <img src={e.avatar_url} className="img-custom" circle/>
              <p>{e.login}</p>
                <p>{e.idpLoginUrl}</p>
            </div>
            )
          })
    );
  }
}
