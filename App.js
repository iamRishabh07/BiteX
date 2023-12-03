import React from 'react';
import ReactDOM from 'react-dom/client';
/*
 Header
  - Logo
  - Nav Items

 Body
  - Search
  - RestaurantContainer
  - RestaurantCards
    - Img
    - Name of Res, Rating, ETA, cusines, Delievery Time

Footer
 - Copyright
 - Links
 - Address
 - Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          height="100px"
          width="300px"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf="
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4"
        height="100px"
      ></img>
      <h3>KFC</h3>
      <h4>Burgers, American Foods</h4>
      <h4>4.1 Stars</h4>
      <h4>18 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
