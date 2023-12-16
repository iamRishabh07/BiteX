import { useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  console.log('Header render');

  useEffect(() => {
    console.log('useEffect called');
  }, []);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" height="100px" width="300px" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
