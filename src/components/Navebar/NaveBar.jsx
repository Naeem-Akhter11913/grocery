// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import SearchIcon from '@mui/icons-material/Search';
// import CompareIcon from '@mui/icons-material/CompareArrows';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { Popover, Divider } from '@mui/material';
// import Categories from '../Popover/Categories';
// import Account from '../Popover/Account';


// function Navbar() {
//     const [anchorEl, setAnchorEl] = useState(null);
//     const [popoverType, setPopoverType] = useState(null); // 'categories' or 'account'

//     const openPopover = (event, type) => {
//         setAnchorEl(event.currentTarget);
//         setPopoverType(type);
//     };

//     const closePopover = () => {
//         setAnchorEl(null);
//         setPopoverType(null);
//     };

//     const isOpen = Boolean(anchorEl);
//     const popoverId = isOpen ? 'simple-popover' : undefined;

//     return (
//         <Box sx={{ flexGrow: 1}}>
//             <AppBar position="static" color="transparent">
//                 <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                     <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg" alt="Nest Logo" style={{ height: '40px' }} />

//                     <Box
//                         component="form"
//                         sx={{
//                             p: '2px 4px',
//                             display: 'flex',
//                             alignItems: 'center',
//                             width: 600,
//                             border: '2px solid #BCE3C9',
//                             borderRadius: 1
//                         }}
//                     >
//                         <Box
//                             component='div'
//                             sx={{
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 cursor: 'pointer',
//                                 marginLeft: "10px"
//                             }}
//                             aria-describedby={popoverId}
//                             onClick={(event) => openPopover(event, 'categories')}
//                         >
//                             <Typography>All Categories</Typography>
//                             <ExpandMoreIcon />
//                         </Box>
//                         <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//                         <InputBase
//                             sx={{ ml: 1, flex: 1 }}
//                             placeholder="Search for items"
//                             inputProps={{ 'aria-label': 'search google maps' }}
//                         />
//                         <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
//                             <SearchIcon />
//                         </IconButton>
//                     </Box>

//                     <Box sx={{ display: 'flex', alignItems: 'center', gap:2 }}>
//                         <IconButton size="large" color="inherit">
//                             <Badge badgeContent={3} color="primary">
//                                 <CompareIcon style={{fontSize:'30px'}} />
//                             </Badge>
//                         </IconButton>
//                         <IconButton size="large" color="inherit">
//                             <Badge badgeContent={6} color="primary">
//                                 <FavoriteIcon style={{fontSize:'30px'}}/>
//                             </Badge>
//                         </IconButton>
//                         <IconButton size="large" color="inherit">
//                             <Badge badgeContent={2} color="primary">
//                                 <ShoppingCartIcon style={{fontSize:'30px'}}/>
//                             </Badge>
//                         </IconButton>
//                         <IconButton size="large" edge="end" color="inherit" onClick={(event) => openPopover(event, 'account')}>
//                             <AccountCircle style={{fontSize:'30px'}}/>
//                         </IconButton>
//                     </Box>
//                 </Toolbar>
//             </AppBar>

//             <Popover
//                 id={popoverId}
//                 open={isOpen}
//                 anchorEl={anchorEl}
//                 onClose={closePopover}
//                 anchorOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'left',
//                 }}
//             >
//                 {popoverType === 'categories' ? (
//                     <Categories closePopover={closePopover} />
//                 ) : (
//                     <Account closePopover={closePopover} />
//                 )}
//             </Popover>
//         </Box>
//     );
// }

// export default Navbar;


import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import CompareIcon from '@mui/icons-material/CompareArrows';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Popover, Divider } from '@mui/material';
import Categories from '../Popover/Categories';
import Account from '../Popover/Account';

function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [popoverType, setPopoverType] = useState(null); // 'categories' or 'account'

    const openPopover = (event, type) => {
        setAnchorEl(event.currentTarget);
        setPopoverType(type);
    };

    const closePopover = () => {
        setAnchorEl(null);
        setPopoverType(null);
    };

    const isOpen = Boolean(anchorEl);
    const popoverId = isOpen ? 'simple-popover' : undefined;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg" alt="Nest Logo" style={{ height: '40px' }} />

                    <Box
                        component="form"
                        sx={{
                            p: '2px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            width: 600,
                            border: '2px solid #BCE3C9',
                            borderRadius: 1
                        }}
                    >
                        <Box
                            component='div'
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer',
                                marginLeft: "10px"
                            }}
                            aria-describedby={popoverId}
                            onClick={(event) => openPopover(event, 'categories')}
                        >
                            <Typography>All Categories</Typography>
                            <ExpandMoreIcon />
                        </Box>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search for items"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <IconButton size="large" color="inherit">
                            <Badge badgeContent={3} color="primary">
                                <CompareIcon style={{ fontSize: '30px' }} />
                            </Badge>
                                <Typography component='span' >Compare</Typography>
                        </IconButton>
                        <IconButton size="large" color="inherit">
                            <Badge badgeContent={6} color="primary">
                                <FavoriteIcon style={{ fontSize: '30px' }} />
                            </Badge>
                            <Typography component='span' >Wishlist</Typography>
                        </IconButton>
                        <IconButton size="large" color="inherit">
                            <Badge badgeContent={2} color="primary">
                                <ShoppingCartIcon style={{ fontSize: '30px' }} />
                            </Badge>
                            <Typography component='span' >Cart</Typography>
                        </IconButton>
                        <IconButton size="large" edge="end" color="inherit" onClick={(event) => openPopover(event, 'account')}>
                            <AccountCircle style={{ fontSize: '30px' }} />
                            <Typography component='span' >Account</Typography>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Popover
                id={popoverId}
                open={isOpen}
                anchorEl={anchorEl}
                onClose={closePopover}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                {popoverType === 'categories' ? (
                    <Categories closePopover={closePopover} />
                ) : (
                    <Account closePopover={closePopover} />
                )}
            </Popover>
        </Box>
    );
}

export default Navbar;
