import React from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    appBar: {
      boxShadow: 'none',
      height: 100
    },
    grow: {
      flexGrow: 1,
    },
    logo:{
      height: '10vh',
    }
  }));

export const CabecalhoEcommerce = () => {

    const classes = useStyles();
    //console.log(React.version);
    return (
        <AppBar className={classes.appBar} position='static' elevation={0} >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <img src="/assets/images/logo.png" alt="Logo da empresa" className={classes.logo}/>
            <div className={classes.grow} />
            <Button color="inherit" variant='outlined' startIcon={<AccountCircle />}>Fazer Login</Button>
          </Toolbar>
      </AppBar>
    )
}
