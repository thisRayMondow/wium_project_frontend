// PrivateRoute.js
import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token');
  // const currentURL = window.location.pathname;
  // const currentPath = decodeURIComponent(currentURL.split('/dashboard/')[1] || '');

  // return isAuthenticated ? <Outlet /> : <Navigate to={"/detail/"+currentPath} replace/>
  return isAuthenticated ? <Outlet /> : <Navigate to={"/"} replace/>
};

export default PrivateRoute;
