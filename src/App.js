// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import WIUM_INDEX from './WIUM_COMPONENTS/WIUM_INDEX';
import WIUM_LOGIN from './WIUM_SHIELD/WIUM_LOGIN';
import Index from './WiumHome/Index';
import PrivateRoute from './WIUM_SHIELD/PrivateRoute';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<WIUM_INDEX />} />
          <Route path="/detail/*" element={<WIUM_LOGIN />} />
          
          {/* Use PrivateRoute directly for nested routes */}
          <Route element={<PrivateRoute />}>
          <Route 
            path='/dashboard/*' 
            element={<Index />} />
          </Route>
            
        </Routes>
      </Router>
    </div>
  );
};

export default App;
