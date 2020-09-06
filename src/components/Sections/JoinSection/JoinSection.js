import React from 'react'

import FeaturesSectionLayout from 'components/Sections/FeaturesSection/FeaturesSectionLayout'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    titleMargins: {
        marginBottom: theme.spacing(8)
    },
  }));


export default function JoinSection(props){

    const classes = useStyles()

    return (
        <FeaturesSectionLayout>
            <div className={classes.titleMargins}>
                <Typography color="textPrimary" align="inherit" variant="h3">
                    Join us!
                </Typography>
            </div>
            <iframe src="https://discordapp.com/widget?id=735894945629732987&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </FeaturesSectionLayout>
    )
}