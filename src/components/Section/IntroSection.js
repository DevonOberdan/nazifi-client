import React from 'react'

import sectionStyle from 'assets/jss/sectionStyles'


import { makeStyles } from "@material-ui/core/styles";

import soup from "assets/img/soup.jpg"
import { Container } from '@material-ui/core';
import MyButton from 'components/Buttons/MyButton'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

//const useStyles = makeStyles(sectionStyle);

// export default function IntroSection(props){
//     const classes = useStyles();
//     // backgroundImage: `url("${soup}")`

//     return(
//         <Paper elevation={3}>
//             <MyButton/>
//         </Paper>
//     )
// }

const useStyles = makeStyles(theme => ({
    root: {
     // height: '100vh',
      backgroundColor: `${theme.palette.background.default}`,
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(64),
        height: theme.spacing(64),
      },
      // marginTop: '100px',
      paddingTop: '200px'
    },

    paper: {
      marginTop: '25px'
    }
  }));
  
  export default function SimplePaper() {
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>
            <Paper className={classes.paper} elevation={3}>  
              <MyButton buttonText="Press me"/>
            </Paper>

        </div>
    );
  }


