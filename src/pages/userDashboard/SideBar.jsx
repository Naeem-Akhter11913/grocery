

import React, { useState, useEffect } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Box, List, ListItem, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import './sidebar.css';
import { logout } from '../../components/Button/LogoutSwall';

const sidebar = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon />,
        link: 'dashboard', // Base path for the dashboard
    },
    {
        title: 'My Address',
        icon: <HomeIcon />,
        link: 'address',
    },
    {
        title: 'Account Details',
        icon: <AccountCircleIcon />,
        link: 'account',
    },
    {
        title: 'Orders',
        icon: <ShoppingCartIcon />,
        link: 'orders',
    },
    {
        title: 'Track Your Order',
        icon: <LocalShippingIcon />,
        link: 'track-order',
    },
    {
        title: 'My Waitlisted',
        icon: <PlaylistAddIcon />,
        link: 'waitlisted',
    },
    {
        title: 'Shop now',
        icon: <AddShoppingCartIcon />,
        link: '/',
    },
    {
        title: 'Log Out',
        icon: <LogoutIcon />,
        link: 'logout',
    },
];

const SideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname.split('/')[2]);


    useEffect(() => {
        setCurrentPath(location.pathname.split('/')[2]);
    }, [location]);


    const navigation = (item) => {
        const { title, link } = item;

        if (title === 'Shop now') {
            navigate('/');
            return;
        }
        if (title === 'Log Out') {
            logout(Swal);
            return;
        }




        navigate(`/user/${link}`);
        setCurrentPath(`/user/${link}`);
    };

    return (
        <Box component='div' style={{ width: '280px', }}>
            <List sx={{ height: '100vh', boxShadow: 2, px: 2 }} className='untitle-list'>
                {sidebar.map((item, index) => (
                    <ListItem
                        key={index}
                        className={`nav-tab ${currentPath === `${item.link}` ? 'active' : ''}`} // Apply active class based on inclusion
                        onClick={() => navigation(item)}
                    >
                        <Typography component='span' sx={{ display: 'flex', gap: 2 }}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default SideBar;
