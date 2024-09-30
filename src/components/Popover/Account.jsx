import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { logout } from '../Button/LogoutSwall';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Swal from 'sweetalert2';

const Account = ({ closePopover }) => {
    const navigate = useNavigate()
    const handleDashboardClick = () => {
        closePopover()
        navigate('/user/dashboard');
    };

    const handleLogoutClick = () => {
        closePopover();
        logout(Swal)
    };

    return (
        <Box sx={{py:3,px:1}}>
            <Typography
               sx={{display:'flex',marginBottom:'20px',cursor:'pointer'}}
                onClick={() => handleDashboardClick()}
            >
                <DashboardIcon /> Dashboard
            </Typography>
            <Typography
                onClick={handleLogoutClick}
                sx={{display:'flex', cursor:'pointer'}}
            >
                <LogoutIcon />Logout
            </Typography>
        </Box>
    );
};

export default Account;
