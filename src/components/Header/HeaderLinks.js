import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

import NazifiWarm from 'assets/img/logo/Nazifi_warm4x.png'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    justify: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  list: {
    [theme.breakpoints.up("md")]: {
        WebkitBoxAlign: "center",
        MsFlexAlign: "center",
        alignItems: "center",
        WebkitBoxOrient: "horizontal",
        WebkitBoxDirection: "normal",
        MsFlexDirection: "row",
        flexDirection: "row"
      },
      [theme.breakpoints.down("sm")]: {
        display: "block"
      },
      marginTop: "0px",
      display: "flex",
      paddingLeft: "0",
      marginBottom: "0",
      listStyle: "none",
      padding: "0",
      flexGrow: 1,
      flex:3,
      justifySelf: 'center'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

export default function HeaderLinks(props) {
  const classes = useStyles();

  return (
      <Grid container justify='center' spacing={1}>
        <Grid item xs={3} sm={1}>
            <Button>Docs</Button>
        </Grid>
        <Grid className={props.onTop ? props.classes.show: props.classes.hide} item xs={3} sm={1}>
            <img src={NazifiWarm} className={`${props.classes.logo}`}></img>
        </Grid>
        <Grid item xs={3} sm={1}>
            <Button>Join us!</Button>
        </Grid>
      </Grid>
  );
}