import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      {
        id: 1,
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
      },
      {
        id: 2,
        login: "mosh-hamedani",
        avatar_url:
          "https://avatars2.githubusercontent.com/u/5441280?s=400&v=4",
        html_url: "https://github.com/mosh-hamedani",
      },
      {
        id: 3,
        login: "jtleek",
        avatar_url:
          "https://avatars2.githubusercontent.com/u/1571674?s=400&u=c9698e3d4db46b4e8b0253b011ae2b90479aea93&v=4",
        html_url: "https://github.com/jtleek",
      },
    ],
  };
  render() {
    const { users } = this.state;
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
