import React from "react";
import UserCard from './UserCard';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';

const Followers = (props) => {
  console.log(props);
  return(
    <div>
      {props.followers.map(e =>
        <UserCard key={e.login} {...e}/>
      )}
    </div>
  )
};

export default Followers;
