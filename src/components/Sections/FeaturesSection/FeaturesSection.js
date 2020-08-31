import React,{useEffect, useState} from 'react'

import {makeStyles} from '@material-ui/core/styles'

import { Typography, Card, Grid } from '@material-ui/core'
import FeaturesSectionLayout from 'components/Sections/FeaturesSection/FeaturesSectionLayout'
import SimpleCard from 'components/Cards/SimpleCard'

import Fade from 'react-reveal/Fade'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: 'flex',
      
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    titlePadding: {

    },
  }));

export default function FeaturesSection(props){
    
    const [widget, setWidget] = useState()

    useEffect(() => {
        fetch("https://discordapp.com/api/guilds/735894945629732987/widget.json")
            .then(response => response.json())
            .then(data => setWidget(data))
    }, [])


    const classes = useStyles()

    return (
        <div className={classes.root}>
        <FeaturesSectionLayout>

            <Fade bottom opposite>
                <Typography color="textPrimary" align="inherit" variant="h3">
                    Features
                </Typography>
            </Fade>

            <Grid container spacing={6}>
                <Grid item xs={3}> 
                    <SimpleCard title="Backups"></SimpleCard>
                </Grid>
                <Grid item xs={3}> 
                    <SimpleCard title="Scheduling"></SimpleCard>
                </Grid>                
                <Grid item xs={3}> 
                    <SimpleCard title="Backups"></SimpleCard>
                </Grid>                
                <Grid item xs={3}> 
                    <SimpleCard title="Backups"></SimpleCard>
                </Grid>
            </Grid>

        </FeaturesSectionLayout>
        </div>
    )
}