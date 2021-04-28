import React, { useState, useEffect, useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import theme from './theme';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  logo: {
    height: '8em',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      opacity: 'transparent',
    },
  },
  menu: {
    backgroundColor: theme.palette.common.arcBlue,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const inputEl = useRef(null);
  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      // if we ae on home page and value is not 0 then we will manuall setvalue to 0 .
      setValue(0);
    } else if (window.location.pathname === '/services' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/revolution' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/about' && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === '/contact' && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === '/estimate' && value !== 5) {
      setValue(5);
    }

    return () => {};
  }, [value]);
  function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true, //whether thre is delay or not
      threshold: 0,
      target: window ? window() : undefined, // by default its set to window
    });

    return React.cloneElement(children, {
      elevation: trigger ? 10 : 0, //elevation of 4 otherwise flat with elevation 0
    });
  }
  // const useStyles = makeStyles((theme) => {

  // })
  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    console.log(e);
    console.log(e.currentTarget);
    setAnchorEl(e.currentTarget);
    //setAnchorEl(inputEl.current);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };
  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to='/'
              className={classes.logoContainer}
              onClick={(e) => setValue(0)}
              disableRipple
            >
              <img src={logo} className={classes.logo} alt='company logo' />
            </Button>

            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor='primary'
            >
              <Tab
                label='Home'
                component={Link}
                to='/'
                className={classes.tab}
              />
              <Tab
                label='Services'
                component={Link}
                to='services'
                className={classes.tab}
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup={anchorEl ? true : undefined}
                onMouseOver={(e) => handleClick(e)}
                ref={inputEl}
                //onMouseOver={(e) => handleClick(e)}
              />
              <Tab
                label='The Revolution'
                component={Link}
                to='revolution'
                className={classes.tab}
              />
              <Tab
                label='About Us'
                component={Link}
                to='about'
                className={classes.tab}
              />
              <Tab
                label='Conatct Us'
                component={Link}
                to='contact'
                className={classes.tab}
              />
            </Tabs>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
              component={Link}
              to='/estimate'
            >
              Free Estimate
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              keepMounted
              classes={{ paper: classes.menu }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              getContentAnchorEl={null}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to='/services'
              >
                Services
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to='/customsoftware'
              >
                Custom Software
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to='/mobileapps'
              >
                Mobile App Development
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to='/websites'
              >
                Website Development
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
}
