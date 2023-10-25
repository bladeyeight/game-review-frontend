import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import crossedSwords from '../assets/crossedSwords.jpg';  // Adjust the path accordingly

const useStyles = makeStyles({
    appBar: {
        '&.MuiAppBar-root': {
            backgroundColor: 'white',
            borderBottom: '2px solid black',
        },
    },
    title: {
      '&.MuiTypography-root': {
        fontFamily: '"Press Start 2P", cursive',
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
                    <img src={crossedSwords} alt="Crossed Swords Icon" className={classes.icon} />
                    <Typography variant="h6" className={classes.title}>
                        TRUEGAMER
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
    
    export default Header;