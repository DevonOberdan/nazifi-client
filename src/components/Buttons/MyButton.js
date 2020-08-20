import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import PropTypes from 'prop-types'

import { useTheme } from '@material-ui/core/styles';

import hexToRgb from 'components/hexToRGB'

const color="#FFF000";

//const theme = {}

const useStyles = makeStyles(theme => ({
    root: {
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 5%, ${theme.palette.primary.light} 60%)`,
        border: 0,
        borderRadius: 3,
        boxShadow: `0 4px 30px 2px rgba(${hexToRgb(theme.palette.primary.light)}, .3)`,
        color: `${theme.palette.primary.contrastText}`,
        height: 48,
        padding: '50px 30px',
    },
})
);

MyButton.propTypes = {
    color1: PropTypes.string.isRequired,
    color2: PropTypes.string.isRequired
}

export default function MyButton(props){

    const theme = useTheme()
    const classes = useStyles()

   // return <Button className={classes.root}>Press me</Button>
    return (
    <Button className={classes.root} variant="contained">
        <Typography>{props.buttonText}</Typography>
    </Button>)
}