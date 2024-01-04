import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
// import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/userContext';
// import Grocery from './components/Grocery';

const Grocery = lazy(() => import('./components/Grocery'));
const AboutUs = lazy(() => import('./components/AboutUs'));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // Authentication
  useEffect(() => {
    // Make an API call and send userName and password
    const data = {
      name: 'Rishabh Srivastava',
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'grocery',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: 'restaurants/:resId',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
