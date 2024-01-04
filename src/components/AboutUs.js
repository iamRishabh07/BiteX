import { Component } from 'react';
import User from './User';
import UserClass from './UserClass';
import UserContext from '../utils/userContext';

class AboutClass extends Component {
  constructor(props) {
    super(props);
    //console.log('Parent constructor called');
  }

  componentDidMount() {
    //console.log('Parent component did mount');
  }
  render() {
    //console.log('Parent rendered');
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {(data) => console.log(data)}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React 🚀</h2>
        <UserClass name={'First'} location={'Blr'} />
      </div>
    );
  }
}

// const AboutUs = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React 🚀</h2>
//       {/*<User
//         name="Rishbh Srivastava"
//         location="Banglore"
//         contact="@rishbahswtwt"
//   />*/}
//       <UserClass name="Rishabh Srivastava" location="Blr" />
//     </div>
//   );
// };

export default AboutClass;
