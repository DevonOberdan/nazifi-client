import React, {useState} from 'react'

import { Link } from 'react-router-dom'


import AppBar from '@material-ui/core/AppBar'

import Slide from '@material-ui/core/Slide';

//import Drawer from '@material-ui/core/Drawer'
import { Toolbar, Button, Switch, Fade, useScrollTrigger } from '@material-ui/core'

import MyButton from 'components/Buttons/MyButton'

import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    appBar: {
        transition: theme.transitions.create(['background-color'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.standard
        })
    },
    appBarScrolled: {
        backgroundColor: 'transparent',
        transition: theme.transitions.create(['background-color'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.standard
        }),
       boxShadow: 'none'
    }

}))


export default function Header(props){

    const classes = useStyles()

    const trigger = useScrollTrigger()

    return (
            <AppBar className = {trigger? classes.appBarScrolled : classes.appBar}>
                <Toolbar>
                    <MyButton buttonText="Nazifi">
                    </MyButton>

                    <Switch checked={props.darkMode} onChange={props.themeChange}/>
                </Toolbar>
            </AppBar>
    )
}