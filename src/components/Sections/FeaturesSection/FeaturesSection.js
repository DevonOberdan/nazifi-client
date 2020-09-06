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
    titleMargins: {
        marginBottom: theme.spacing(8)
    },

    gridItem: {
        margin: theme.spacing(2),
    },

    test:{
        display: 'flex-center',
        justifyContent: 'center',
    },
  }));

export default function FeaturesSection(props){
    
    const [widget, setWidget] = useState()

    const classes = useStyles()

    return (
        <div className={classes.root}>
        <FeaturesSectionLayout>

            <div className={classes.titleMargins}>
            <Fade bottom opposite>
                <Typography color="textPrimary" align="inherit" variant="h3">
                    Features
                </Typography>
            </Fade>
            </div>

            <div>
                <Grid container spacing={12} className= {classes.test}>
                    <Grid item xs={5} className={classes.gridItem}> 
                        <SimpleCard title="Backups" ></SimpleCard>
                    </Grid>
                    <Grid item xs={5} className={classes.gridItem}> 
                        <SimpleCard title="Scheduling" ></SimpleCard>
                    </Grid>                
                    <Grid item xs={5} className={classes.gridItem}> 
                        <SimpleCard title="Backups" c></SimpleCard>
                    </Grid>                
                    <Grid item xs={5} className={classes.gridItem}> 
                        <SimpleCard title="Backups" ></SimpleCard>
                    </Grid>
                </Grid>
            </div>

        </FeaturesSectionLayout>
        </div>
    )
}