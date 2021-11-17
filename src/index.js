import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Patient from './pages/Patient';
import {BrowserRouter, Routes, Route}from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/patient' element={<Patient/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
