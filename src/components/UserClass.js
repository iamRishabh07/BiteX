import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'Dummy',
        location: 'Default',
      },
    };
    // console.log(this.props.name + 'Child Constructor called');
  }

  async componentDidMount() {
    //console.log(this.props.name + 'Child Component did mount');
    const data = await fetch('https://api.github.com/users/iamRishabh07');
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log('Component did update');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    //const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    //console.log(this.props.name + 'Child render called');
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @rishabhstwt</h4>
      </div>
    );
  }
}

export default UserClass;
