import React from "react";
import { makeStyles, duration } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button, ButtonBase, Typography } from "@material-ui/core";



import NazifiWarm from 'assets/img/logo/Nazifi_warm4x.png'
import MyButton from "components/Buttons/MyButton";

import Fade from 'react-reveal/Fade'
import Rotate from 'react-reveal/Rotate'

import classNames from 'classnames'
import hexToRgb from "components/hexToRGB";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    '& Button': {
      margin: '0 3em'
    },
  },

  logoStart:{
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: 500
    }),
    maxWidth: '5%',
    maxHeight: '5%',
  },
  logoHidden:{
    width: '0%'
  },
  logoVisible:{
    margin: "0 1.25em",
    width: '5%'
  },
  logoShadow:{
    boxShadow: `0 4px 30px 2px rgba(${hexToRgb(theme.palette.secondary.light)}, .3)`,
  },

  button: {
    borderColor: 'transparent',
    "&:hover":{
      borderColor: theme.palette.secondary.light,
      boxShadow: `0px 0px 4px 1px rgba(${hexToRgb(theme.palette.secondary.light)}, .2)`,

    },

  },

  center:{
    align: 'center'
  }
}));

export default function HeaderLinks(props) {
  const classes = useStyles();


  const buttonClasses = classNames({
    [classes.buttonTop]: true,
    [classes.buttonBottom]: !props.onTop
  })

  const logoClasses = classNames({
   [classes.logoStart]: true,
   [classes.logoHidden]: props.onTop,
   [classes.logoVisible]: !props.onTop,
  })

  return (

    <div className={classes.root}>
      <Button size="large" variant="outlined" className={classes.button}>
        {/* <Typography variant="h7"> */}
        Test
        {/* </Typography> */}
      </Button>

      <Button size="large" variant="outlined" className={classes.button}>
        {/* <Typography variant="h7"> */}
        Docs
        {/* </Typography> */}
      </Button>

      <Fade duration={500} when={!props.onTop}>
        <img src={NazifiWarm} className={logoClasses}/>
      </Fade>

      <Button size="large" variant="outlined" className={classes.button}>
        {/* <Typography variant="h6"> */}
        Features
        {/* </Typography> */}
      </Button>
      <Button size="large" variant="outlined" className={classes.button}>
      {/* <Typography variant="h6">  */}
        Join!
      {/* </Typography> */}
      </Button>
    </div>
    
    // <div>
    //   <Grid container justify='center' className={classes.root}>
        
    //     <Grid item align="center" xs={3} sm={1} className={buttonClasses}>
    //         <Button variant="outlined" className={classes.button}>Test</Button>
    //     </Grid>

    //     <Grid item align="center" xs={3} sm={1} className={buttonClasses}>
    //       <Button variant="outlined" className={classes.button}>Docs</Button>
    //     </Grid>

    //     <Grid item xs={3} sm={1} classes={logoClasses}>
    //       <Fade duration={250} when={!props.onTop}>
    //         <img src={NazifiWarm} className={classes.logoImage}></img>
    //       </Fade>
    //     </Grid>

    //     <Grid item align="center" xs={3} sm={1} className={buttonClasses}>
    //         <Button variant="outlined" className={classes.button}>Features</Button>
    //     </Grid>
    //     <Grid item align="center" xs={3} sm={1} className={buttonClasses}>
    //         <Button variant="outlined" className={classes.button}>Join!</Button>
    //     </Grid>

    //   </Grid>
    // </div>
  );
}