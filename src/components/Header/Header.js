import React, {useState, useEffect, useRef} from 'react'

import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'

import Slide from '@material-ui/core/Slide';

//import Drawer from '@material-ui/core/Drawer'
import { Toolbar, Switch, useScrollTrigger, Typography, Button, ListItem, List, Grid } from '@material-ui/core'

import MyButton from 'components/Buttons/MyButton'

import { makeStyles } from '@material-ui/core/styles'

import NazifiCool from 'assets/img/logo/Nazifi_cool4x.png'
import NazifiCoolText from 'assets/img/logo/Nazifi_cool_text4x.png'
import NazifiCoolDark from 'assets/img/logo/Nazifi_cool-dark4x.png'
import NazifiWarm from 'assets/img/logo/Nazifi_warm4x.png'
import NazifiWarmText from 'assets/img/logo/Nazifi_warm_text4x.png'
import HeaderLinks from './HeaderLinks';

import classNames from 'classnames'

import Fade from 'react-reveal/Fade'

const headerFadeInTime = 500

const useStyles = makeStyles(theme => ({
    appBar: {
        transition: theme.transitions.create(['background-color'], {
          easing: theme.transitions.easing.easeOut,
          duration: 500
        }),
        paddingRight: '150px',
        paddingLeft: '150px',
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor: theme.palette.background.default
    },
    appBarScrolled: {
        backgroundColor: 'transparent',
        boxShadow: 'none'
    },

    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    logoText: {
        fontFamily: 'arbotek',
        color: theme.palette.primary.main.light
    },

    root:{
        display:'flex',
        '& > *':{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        'first-child > span':{
            marginRight: 'auto'
        },
        'last-child > span':{
            marginLeft: 'auto'
        }
    },

}))


export default function Header(props){

    const logoEndPoint = 650

    const classes = useStyles()

    const [onTop, setOnTop] = useState(true)

    useEffect(() => {
        const checkForTop = () => {
            setOnTop(window.pageYOffset < logoEndPoint)

        };
        window.addEventListener("scroll", checkForTop);
        return () => window.removeEventListener("scroll", checkForTop);
      }, []);
    

    const appBarClasses = classNames({
        [classes.appBar]: true,
        [classes.appBarScrolled]: onTop
    })

    return (
        <AppBar className = {appBarClasses}>
            <Toolbar classname={classes.root}>
                {/* <Fade duration={100} when={!onTop}>
                    <Typography className={`${classes.logoText}`} variant="h3" color="secondary">
                        <span>Nazifi</span>
                    </Typography>
                </Fade> */}

                <HeaderLinks onTop={onTop}/>
                    
                {/* <div className={classes.right}>                    
                    <span><Switch checked={props.darkMode} onChange={props.themeChange}/> </span>
                </div> */}
            </Toolbar>
        </AppBar>
    )
}