import React, {useState, useEffect, useRef} from 'react'

import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'

import Slide from '@material-ui/core/Slide';

//import Drawer from '@material-ui/core/Drawer'
import { Toolbar, Switch, Fade, useScrollTrigger, Typography, Button, ListItem, List, Grid } from '@material-ui/core'

import MyButton from 'components/Buttons/MyButton'

import { makeStyles } from '@material-ui/core/styles'

import NazifiCool from 'assets/img/logo/Nazifi_cool4x.png'
import NazifiCoolText from 'assets/img/logo/Nazifi_cool_text4x.png'
import NazifiCoolDark from 'assets/img/logo/Nazifi_cool-dark4x.png'
import NazifiWarm from 'assets/img/logo/Nazifi_warm4x.png'
import NazifiWarmText from 'assets/img/logo/Nazifi_warm_text4x.png'
import HeaderLinks from './HeaderLinks';



const useStyles = makeStyles(theme => ({
    appBar: {
        transition: theme.transitions.create(['background-color'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.standard
        }),
        paddingRight: '150px',
        paddingLeft: '150px',
        paddingTop: '10px',
        paddingBottom: '10px'
    },
    appBarScrolled: {
        backgroundColor: 'transparent',
        boxShadow: 'none'
    },

    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        maxWidth: '50%',
        maxHeight: '50%',
        minWidth: '50%',
        minHeight: '50%',
    },
    text: {
        textAlign: 'center',
        flexGrow: 1
    },
    show: {
        display: 'none'
    },
    hide: {
        display: 'block'
    }

}))


export default function Header(props){

    const logoEndPoint = 700

    const classes = useStyles()

    const trigger = useScrollTrigger()

    const [onTop, setOnTop] = useState(true)

    useEffect(() => {
        const checkForTop = () => {
            setOnTop(window.pageYOffset < logoEndPoint)
        };
        window.addEventListener("scroll", checkForTop);
        return () => window.removeEventListener("scroll", checkForTop);
      }, []);
    

    return (
            <AppBar className = {`${classes.appBar} ${!trigger && classes.appBarScrolled}`}>
                <Toolbar >
                    {/* <Grid container justify='center' spacing={3}>
                        <Grid item xs={3} sm={1}>
                            <Button>Docs</Button>
                        </Grid>
                        <Grid item xs={3} sm={1}>
                            <img src={NazifiWarm} className={`${classes.logo} ${onTop ? classes.show: classes.hide}`}></img>
                        </Grid>
                        <Grid item xs={3} sm={1}>
                            <Button>Join us!</Button>
                        </Grid>
                    </Grid> */}
                    <HeaderLinks onTop={onTop} classes= {classes}/>
                        

                    <div className={classes.right}>                    
                        <Switch checked={props.darkMode} onChange={props.themeChange}/>
                    </div>
                </Toolbar>
            </AppBar>
    )
}