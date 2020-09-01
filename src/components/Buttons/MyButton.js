import React from 'react'
import { makeStyles, } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import PropTypes from 'prop-types'

import { useTheme} from '@material-ui/core/styles';

import hexToRgb from 'components/hexToRGB'

const useStyles = makeStyles(theme => ({
    root: {
        background: `linear-gradient(45deg, ${theme.palette.secondary.main} 5%, ${theme.palette.secondary.light} 60%)`,
        border: 0,
        borderRadius: 3,
        boxShadow: `0 4px 30px 2px rgba(${hexToRgb(theme.palette.secondary.light)}, .3)`,
        color: `${theme.palette.secondary.contrastText}`,
        height: 12,
        padding: props => `${props.paddingSize[0]}px ${props.paddingSize[1]}px`,
    },
})
);

MyButton.propTypes = {
    size: PropTypes.array.isRequired,
}
MyButton.defaultProps = {
    paddingSize: [25, 25]
}

export default function MyButton(props){

    const theme = useTheme()
    const classes = useStyles(props)

    return (
    <Button className={classes.root}  size={props.size}>
        {props.buttonText}    
    </Button>)
}