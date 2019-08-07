import React, { Component } from "react";
import Loader from "./Loader";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';



const UserCard = (props) => {
    console.log(props);
    return(
      <Card center>
        <img src={props.avatar_url} alt={props.name} />
        <h1>{props.name}</h1>
        <a href={props.html_url}>@{props.login}</a>
        <p>Location: {props.location}</p>
        <span><p>Repos: {props.public_repos}  Gists: {props.public_gists}  Followers:  {props.followers}</p></span>
      </Card>
    )
  };

export default UserCard;
