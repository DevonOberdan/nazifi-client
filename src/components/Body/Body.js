import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

import {mainRaised} from 'assets/jss/material-kit-pro-react'

import classNames from 'classnames'

import JoinSection from 'components/Sections/JoinSection/JoinSection';
import FeaturesSection from 'components/Sections/FeaturesSection/FeaturesSection';
import ImagesSection from 'components/Sections/ImagesSection'

const useStyles = makeStyles(theme => ({
    mainRaised,
    floatingColor: {
      backgroundColor: theme.palette.background.paper,
      position: "relative",
      zIndex: "3",
      //padding: theme.spacing(1),
    },
    backColor: {
        background: `linear-gradient(45deg, ${theme.palette.secondary.light} 5%, ${theme.palette.secondary.main} 60%)`,
        height: '1000vh',
        padding: theme.spacing(10),
        paddingTop: theme.spacing(24),
    },
}));


export default function Body(props){
    const classes = useStyles()
    return (
        <div className={classes.backColor}>
            <div className={classNames(classes.container)}>
                <FeaturesSection/>
                <JoinSection/>
                <ImagesSection/>
            </div>
        </div>
    )
}