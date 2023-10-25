import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import crossedSwords from '../assets/crossedSwords.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    appBar: {
        '&.MuiAppBar-root': {
            backgroundColor: 'white',
            borderBottom: '2px solid black',
        },
    },
    customFont: {
        fontFamily: '"Press Start 2P", cursive',
        color: 'black',
    },
    title: {
      '&.MuiTypography-root': {
        marginLeft: '10px',
        color: 'black',
      },
    },
    icon: {
        height: '50px',     // Adjust size accordingly
        width: '50px',      // Adjust size accordingly
      }
    });
    
    function Header() {
        const classes = useStyles();
    
        return (
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                <Link to="/">
                    <img src={crossedSwords} alt="Crossed Swords Icon" className={classes.icon} />
                </Link>
                    <Typography variant="h6" className={classes.title}>
                    <span className={classes.customFont}>GAMEREIGHT</span>
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
    
    export default Header;