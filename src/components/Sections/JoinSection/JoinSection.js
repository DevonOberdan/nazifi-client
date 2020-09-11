import React, {useState, useEffect} from 'react'

import FeaturesSectionLayout from 'components/Sections/FeaturesSection/FeaturesSectionLayout'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    titleMargins: {
        marginBottom: theme.spacing(8)
    },

    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        padding: '0 4px',
        justifyContent: 'center',
        maxHeight: '150vh',
        alignContent: 'center',
        [theme.breakpoints.down('xs')]: {
            maxheight: '400vh'
        },
        [theme.breakpoints.up('sm')]: {
            maxheight: '300vh'
        },
        [theme.breakpoints.up('md')]: {
            maxheight: '200vh'
        },
    },

    image: {
        margin: '4px',
        width: '20%',
        height: '20%',
    }
  }));

export default function JoinSection(props){

    const classes = useStyles()
    
    const [instaContent, setinstaContent] = useState([])

    const [instaPics, setinstaPics] = useState([])

    // useEffect(() => {
    //     fetch("https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=IGQVJYSS1yTG10aTVxTE9LcHNPV2NfMFdJb0pkNG9VWHoxcm1KZAWo5UGhfWXl5RDBSbkluQi1XNVZAnQ0FlR3MwRzRaZA0dldHhmUmFmSXlnejFLbGpyUW9XUzVQSFJ5Qjd3aTV2and3")
    //     .then(response => response.json())
    //     .then(data => {
    //         setinstaContent(data.data)
    //         console.log(data)
    //     })
    // }, [])

    useEffect(() => {        
        var tempState = []

        instaContent.map(post => {
            tempState.push(post.media_url)
        })

        setinstaPics(tempState)
    }, [instaContent])


    return (
        <FeaturesSectionLayout>
            <div className={classes.titleMargins}>
                <Typography>Join us!</Typography>
            </div>
            <iframe src="https://discordapp.com/widget?id=735894945629732987&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>


            {/* <div className={classes.container}>
                    {
                        instaPics.map(image => 
                                <img key={image} src={image} className={classes.image}/>
                        )
                    }
                
            </div> */}
        </FeaturesSectionLayout>
    )
}