import React from 'react'

import sectionStyle from 'assets/jss/sectionStyles'

import IntroSectionLayout from 'components/Sections/IntroSection/IntroSectionLayout'

import { makeStyles, hexToRgb } from "@material-ui/core/styles";

import soup from "assets/img/soup.jpg"
import { Container } from '@material-ui/core';
import MyButton from 'components/Buttons/MyButton'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import NazifiCool from 'assets/img/logo/Nazifi_cool4x.png'
import NazifiCoolText from 'assets/img/logo/Nazifi_cool_text4x.png'
import NazifiCoolDark from 'assets/img/logo/Nazifi_cool-dark4x.png'
import NazifiWarm from 'assets/img/logo/Nazifi_warm4x.png'
import NazifiWarmText from 'assets/img/logo/Nazifi_warm_text4x.png'


const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const useStyles = makeStyles(theme => ({
    root: {
      height: '400vh',
      background: `linear-gradient(45deg, ${theme.palette.secondary.light} 5%, ${theme.palette.secondary.dark} 60%)`,

     // backgroundColor: `${theme.palette.background.default}`,
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(64),
        height: theme.spacing(64),
      },
      paddingTop: '200px'
    },
    paper: {
      marginTop: '25px',
    },

    background: {
      backgroundImage: `url(${NazifiWarmText})`,

      height: '100vh',
      boxShadow: `0 4px 30px 2px rgba(${hexToRgb(theme.palette.background.default)}, .3)`,
      backgroundColor: `${theme.palette.background.default}`, // Average color of the background image.
      backgroundPosition: 'center',
    },

    h5: {
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4),
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(10),
      },
    },
    more: {
      marginTop: theme.spacing(2),
    },
    logo:{
      maxWidth: '50%',
      maxHeight: '50%',
      minWidth: '50%',
      minHeight: '50%',
    },
  }));
  
  export default function SimplePaper() {
    const classes = useStyles();
  
    return (
      //  <div className={classes.root}>
      <IntroSectionLayout backgroundClassName={classes.background}>
          {/* <Typography color="inherit" align="center" variant="h2" marked="center">
            Nazifi
          </Typography> */}
          {/* <img className={classes.logo} src={NazifiWarmText}></img> */}
          <Typography
            color="inherit"
            align="center"
            variant="h5"
            className={classes.h4}
          >
            Discord Backups for your Enterprise.
          </Typography>
{/* 
        <Paper className={classes.paper} elevation={3}>  
        <MyButton buttonText="Press me"/>
        </Paper> */}

      </IntroSectionLayout>
    //  </div>
    );
  }


