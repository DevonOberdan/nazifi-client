import React from 'react'

import FeaturesSectionLayout from 'components/Sections/FeaturesSection/FeaturesSectionLayout'
import { Typography } from '@material-ui/core'

export default function JoinSection(props){


    return (
        <FeaturesSectionLayout>
            <Typography color="textPrimary" align="inherit" variant="h4">Join us!</Typography>
            <iframe src="https://discordapp.com/widget?id=735894945629732987&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </FeaturesSectionLayout>
    )
}