import React from 'react';
import 'sweetalert2/src/sweetalert2.scss'
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import DashboardContainer from "./pages/userDashboard/DashboardContainer";
import './styles/colors.css';
import 'react-awesome-slider/dist/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Footer from './components/footer';
import Main from './pages/main/Main';

import 'react-alice-carousel/lib/alice-carousel.css';



function App() {
  return (
    <Router>
      <div className="App1">
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
