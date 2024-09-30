

import React from 'react';
import 'sweetalert2/src/sweetalert2.scss'
import Navbar from "./components/Navebar/NaveBar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import DashboardContainer from "./pages/userDashboard/DashboardContainer";
import './styles/colors.css';
import 'react-awesome-slider/dist/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSetion from './pages/hero';
import './index.css'
import Footer from './components/footer';
import SecondNavbar from './components/Navebar/SecondNavbar';
import Main from './pages/main/Main';
import CategoryCart from './components/carts/CategoryCart';

function App() {
  return (
    <Router>
      <div className="App1">
        <CategoryCart/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user/*" element={<DashboardContainer />} /> 
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
