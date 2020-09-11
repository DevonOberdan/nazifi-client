import React, {useState, useEffect} from 'react'

import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        padding: '0 4px',
        justifyContent: 'center',
        maxHeight: '150vh',
        maxWidth: '100vw',
        alignContent: 'center',
        [theme.breakpoints.down('xs')]: {
            maxheight: '400vh',
            backgroundColor: 'blue'
        },
        [theme.breakpoints.up('sm')]: {
            maxheight: '300vh',
            // padding: "0 25%",
            backgroundColor: 'white'

        },
        [theme.breakpoints.up('md')]: {
            maxheight: '250vh',
            // padding: "0 25%",
            backgroundColor: 'yellow'

        },
        [theme.breakpoints.up('lg')]: {
            maxheight: '200vh',
            // padding: "0 25vw",
            backgroundColor: 'orange'

        },
    },

    image: {
        margin: '4px',

        [theme.breakpoints.down('xs')]: {
            width: '35%',
            height: '35%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '30%',
            height: '30%',
        },
        [theme.breakpoints.up('md')]: {
            width: '30%',
            height: '30%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '20%',
            height: '20%',
        },
    }
  }));

  export default function JoinSection(props){

    const classes = useStyles()
    
    const [instaContent, setinstaContent] = useState([])

    // useEffect(() => {
    //     fetch("https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=IGQVJYSS1yTG10aTVxTE9LcHNPV2NfMFdJb0pkNG9VWHoxcm1KZAWo5UGhfWXl5RDBSbkluQi1XNVZAnQ0FlR3MwRzRaZA0dldHhmUmFmSXlnejFLbGpyUW9XUzVQSFJ5Qjd3aTV2and3")
    //     .then(response => response.json())
    //     .then(data => {
    //         setinstaContent(data.data)
    //         console.log(data)
    //     })
    // }, [])

    useEffect(() => {
        fetch("http://localhost:9000/api")
        .then(response => response.json())
        .then(data => {
            setinstaContent(data.data)
            console.log(data)
        })
    }, [])

    return (
        <div>
            <Typography>{window.innerWidth }</Typography>
            <div className={classes.container}>
                    {
                        instaContent.map(image => 
                                <img key={image.id} src={image.media_url} className={classes.image}/>
                        )
                    }
            </div>
        </div>
    )
}