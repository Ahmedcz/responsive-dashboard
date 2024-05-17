import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout  from './components/templates/DashboardLayout';
import  LoginPage from  './components/templates/LoginPage';
import  ProfilePage from  './components/templates/ProfilePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login"  element={ <LoginPage/> } />
        <Route path="/profile"  element={ <ProfilePage/> } />
        <Route path="/" element= {<DashboardLayout/>} />
      </Routes>
    </Router>
  );
};

export default App;
