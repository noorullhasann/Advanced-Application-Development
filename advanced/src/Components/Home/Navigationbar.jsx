import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from 'E:/Advanced-Application-Development/advanced/src/assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'; 


const pages = [
  { name: 'Home', link: '/home' },
  { name: 'Jobs', link: '/jobs' },
  { name: 'Companies', link: '/company' }
];

const settings = ['Account', 'Logout'];

function Navigationbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate(); // Get access to navigate function

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    // Implement logout functionality
    navigate("/"); // Navigate to "/"
    handleCloseUserMenu(); // Close the user menu after logout
  };


  const handleNavigation = (setting) => {
    if (setting === 'Logout') {
      handleLogout();
    } else {
      navigate(`/${setting.toLowerCase()}`);
      handleCloseUserMenu(); // Close the user menu after navigation
    }
  };


  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgb(208, 146, 244)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          <img
  src={logo}
  alt="Logo"
  style={{ width: '100px', height: 'auto' }} // Adjust width as per your requirement
/>
         {/* Make sure to specify width, height, and any other necessary styles for the image */}
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, mr: 2 }}>
          {pages.map((page) => (
            <Button
            key={page.name}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
            component={Link}
            to={page.link}
            >
            {page.name}
            </Button>
            ))}
            </Box>
            
             <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={() => handleNavigation(setting)}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
              </Toolbar>
              </Container>
              </AppBar>
              );
}

export default Navigationbar;
