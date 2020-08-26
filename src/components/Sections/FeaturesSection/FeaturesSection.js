import React,{useEffect, useState} from 'react'

import makeStyles from '@material-ui/core/styles'

import { Typography } from '@material-ui/core'
import IntroSectionLayout from 'components/Sections/IntroSection/IntroSectionLayout'


export default function FeaturesSection(props){
    
    const [widget, setWidget] = useState()

    useEffect(() => {
        fetch("https://discordapp.com/api/guilds/735894945629732987/widget.json")
            .then(response => response.json())
            .then(data => setWidget(data))
    }, [])


    return (
        <IntroSectionLayout>
            <Typography color="inherit" align="inherit" variant="h2">
                Features
            </Typography>


        </IntroSectionLayout>
    )
}