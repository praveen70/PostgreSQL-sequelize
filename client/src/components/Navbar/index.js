import React from 'react';
// import { NavLink } from "react-router-dom";
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import Menu from '@material-ui/core/Menu';
import Loginmodal from '../Modal'
import {  Image, Icon } from 'semantic-ui-react'
import Submenu from '../Submenu';
import Slider from '../Imageslider'
import Carddata from '../Carddata';
import Newmobile from '../Mobilenewlaunches';
import Appleitem from '../Appleitems';
import Offer from '../Offersonly'
import Toprefurbished from '../Toprefurbished';
//import Badge from '@material-ui/core/Badge';
//import MenuIcon from '@material-ui/icons/Menu';
//import AccountCircle from '@material-ui/icons/AccountCircle';
//import MailIcon from '@material-ui/icons/Mail';
//import NotificationsIcon from '@material-ui/icons/Notifications';
import './navbar.css'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    color:'white',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
   
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Login & Signup</MenuItem>
      <MenuItem onClick={handleMenuClose}>More</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
       <a href="/more"> <p>More</p></a> 
      </MenuItem>
      <MenuItem>
        <p>Login & Signup</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="Account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {/* <AccountCircle /> */}
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
          {/* <Image wrapped size='medium' src={require('../../image/logo.png')} style={{height: "0 auto" , width: 80}} /> */}
          <Icon loading name='asterisk' style={{ color: 'white'}} />Buyanything
          </Typography>
          <div className={classes.search} style={{float : 'right'}}>
            <div className={classes.searchIcon} >
              <SearchIcon  />
            </div>
            <InputBase
              placeholder="Search for products brands "
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="Show 4 new mails" color="inherit">
            <div style={{display:'flex' ,marginRight:10, fontSize:15, }}>
            <div style={{marginLeft:15}}>
            <Loginmodal />
            {/* <strong ><NavLink to='/Login' style={{color: 'white'}}>Login & Signup</NavLink> </strong> */}
            </div>
            <div style={{marginLeft:15}}>
                 <a><strong style={{color:'white'}}>More</strong></a>
            </div>
            <div style={{marginLeft:15}}>
                 <a><strong><i class="material-icons" style={{color:'white'}}>Cart</i></strong></a>
            </div>

            </div>
              
             
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="Show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    <div>
        <Submenu />
    </div>
    <div className='col-md-12'>
      <Slider />
    </div>
    <div >
    <Carddata />
    </div>
    <div>
    <div> 
        <Offer />
      </div>
    </div>
    <div >
      <Newmobile />
    </div>
    <div>
      <Toprefurbished />
    </div>
    </div>
  );
}
