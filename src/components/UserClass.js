import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/DSPMSD78");
    const res = await data.json();
    this.setState({ userInfo: res });
    console.log(res);
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>{name}</h1>
        <h3>{location}</h3>
        <img src={avatar_url}></img>
        <h4>Contact : @dspmsd78</h4>
      </div>
    );
  }
}
export default UserClass;
