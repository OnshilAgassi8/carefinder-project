import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Resetpassword from './components/Resetpassword';
import './App.css';
import MyHospitals from './components/Hospitals';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpassword" element={<Resetpassword/>} />
        <Route path="/hospitals" element={<MyHospitals />}/>
      </Routes>
    </Router>
  );
}

export default App;
