import { useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  console.log('Header render');

  const onlineStatus = useOnlineStatus();

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
          <li>Online Stautus : {onlineStatus ? '✅' : '🔴'}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
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
