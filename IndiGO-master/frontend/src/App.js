import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotificationForm from './components/Flights/NotificationForm';
import Dashboard from './components/Admin/Dashboard'
import UpdateFlight from './components/Flights/UpdateFlight'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/notify-me' element={<NotificationForm />} />
      <Route path='/admin-dashboard' element={<Dashboard/>} />
      <Route path='/update-flight/:id' element={<UpdateFlight/>} />

    </Routes>
  );
};

export default App;
