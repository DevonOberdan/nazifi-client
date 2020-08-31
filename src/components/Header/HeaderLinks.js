import React from "react";
import { makeStyles, duration } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";



import NazifiWarm from 'assets/img/logo/Nazifi_warm4x.png'
import MyButton from "components/Buttons/MyButton";

import Fade from 'react-reveal/Fade'

import classNames from 'classnames'
import hexToRgb from "components/hexToRGB";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    justify: 'center'
  },
  logoImage:{
    maxWidth: '75%',
    maxHeight: '75%',
    minWidth: '75%',
    minHeight: '75%',
  },
  logoHide:{
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.easeOut,
      duration: 500
    }),
  },
  logoShow:{
    width: '100%'
  },

  buttonTop:{
    justifyContent: 'center',
  },
  buttonBottom:{
    //margin: '0px 30px 0px 0px',
  },
  button: {
    borderColor: 'transparent',
    "&:hover":{
     // boxShadow: `0 4px 5px 2px rgba(${hexToRgb(theme.palette.secondary.light)}, .3)`,
      borderColor: theme.palette.secondary.light
    }
  },
}));

export default function HeaderLinks(props) {
  const classes = useStyles();


  const buttonClasses = classNames({
    [classes.buttonTop]: true,
    [classes.buttonBottom]: !props.onTop
  })

  const logoClasses = classNames({
    [classes.logoHide]: true,
    [classes.logoShow]: !props.onTop
  })

  return (
    <div>
      <Grid container justify='center' spacing={1} className={classes.root}>
        
        <Grid item align="center" xs={3} sm={1} className={buttonClasses}>
            <Button variant="outlined" className={classes.button}>Test</Button>
        </Grid>

        <Grid item align="center" xs={3} sm={1} className={buttonClasses}>
          <Button variant="outlined" className={classes.button}>Docs</Button>
        </Grid>

        <Grid item xs={3} sm={1} classes={logoClasses}>
          <Fade duration={250} when={!props.onTop}>
            <img src={NazifiWarm} className={classes.logoImage}></img>
          </Fade>
        </Grid>

        <Grid item align="center" xs={3} sm={1} className={buttonClasses}>
            <Button variant="outlined" className={classes.button}>Features</Button>
        </Grid>
        <Grid item align="center" xs={3} sm={1} className={buttonClasses}>
            <Button variant="outlined" className={classes.button}>Join!</Button>
        </Grid>

      </Grid>
    </div>
  );
}