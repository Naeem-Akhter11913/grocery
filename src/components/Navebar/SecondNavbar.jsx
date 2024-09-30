import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { GridView, SupportAgent, LocalFireDepartment } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#fff',
    color: '#333',
  },
  menuButton: {
    marginRight: 16,
  },
  title: {
    flexGrow: 1,
  },
  supportText: {
    fontSize: '12px',
    color: '#333',
  },
  contact: {
    color: '#43A047', // Green Color
    fontWeight: 'bold',
    fontSize: '18px',
  },
  dropdownLink: {
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      color: '#43A047',
    },
  },
});

const SecondNavbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenu, setOpenMenu] = React.useState(null);

  const handleMenuClick = (event, menuName) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(menuName);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      className={classes.appBar}
      sx={{
        backgroundColor: 'white',
        color: 'black',
        my: 3,
        border:'1px solid #e2e8f0'
      }}>
      <Toolbar>
        <Button
          startIcon={<GridView />}
          onClick={(event) => handleMenuClick(event, 'categories')}
          style={{ color: '#fff', backgroundColor: '#43A047' }}
        >
          Browse All Categories
        </Button>

        {/* Deals Icon */}
        <IconButton color="inherit">
          <LocalFireDepartment />
          <Typography variant="body1" style={{ marginLeft: 8 }}>
            Deals
          </Typography>
        </IconButton>

        {/* Navigation Links */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit" onClick={(event) => handleMenuClick(event, 'shop')}>
            Shop
          </Button>
          <Button color="inherit" onClick={(event) => handleMenuClick(event, 'vendors')}>
            Vendors
          </Button>
          <Button color="inherit" onClick={(event) => handleMenuClick(event, 'megaMenu')}>
            Mega menu
          </Button>
          <Button color="inherit">Blog</Button>
          <Button color="inherit" onClick={(event) => handleMenuClick(event, 'pages')}>
            Pages
          </Button>
          <Button color="inherit">Contact</Button>
        </Box>

        {/* Contact and Support */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" className={classes.contact}>
            1900 - 888
          </Typography>
          <Box ml={1}>
            <SupportAgent style={{ color: '#43A047' }} />
            <Typography variant="body2" className={classes.supportText}>
              24/7 Support Center
            </Typography>
          </Box>
        </Box>

        {/* Dropdown Menus */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(openMenu)}
          onClose={handleMenuClose}
        >
          {openMenu === 'categories' && (
            <>
              <MenuItem onClick={handleMenuClose}>Category 1</MenuItem>
              <MenuItem onClick={handleMenuClose}>Category 2</MenuItem>
              <MenuItem onClick={handleMenuClose}>Category 3</MenuItem>
            </>
          )}
          {openMenu === 'shop' && (
            <>
              <MenuItem onClick={handleMenuClose}>Shop 1</MenuItem>
              <MenuItem onClick={handleMenuClose}>Shop 2</MenuItem>
              <MenuItem onClick={handleMenuClose}>Shop 3</MenuItem>
            </>
          )}
          {openMenu === 'vendors' && (
            <>
              <MenuItem onClick={handleMenuClose}>Vendor 1</MenuItem>
              <MenuItem onClick={handleMenuClose}>Vendor 2</MenuItem>
              <MenuItem onClick={handleMenuClose}>Vendor 3</MenuItem>
            </>
          )}
          {openMenu === 'megaMenu' && (
            <>
              <MenuItem onClick={handleMenuClose}>Mega 1</MenuItem>
              <MenuItem onClick={handleMenuClose}>Mega 2</MenuItem>
              <MenuItem onClick={handleMenuClose}>Mega 3</MenuItem>
            </>
          )}
          {openMenu === 'pages' && (
            <>
              <MenuItem onClick={handleMenuClose}>Page 1</MenuItem>
              <MenuItem onClick={handleMenuClose}>Page 2</MenuItem>
              <MenuItem onClick={handleMenuClose}>Page 3</MenuItem>
            </>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default SecondNavbar;
