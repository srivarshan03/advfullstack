// App.jsx

import React from 'react';
import LoginForm from './pages/auth/login';
import RegistrationForm from './pages/auth/Register';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/auth/Home';
import Services from './pages/auth/services';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to='/login' />}/>
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/register' element={<RegistrationForm />}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
