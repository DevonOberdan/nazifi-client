import {useTheme} from '@material-ui/core/styles'

import TaiteNazifi from '@material-ui/core/styles/makeStyles'

import NazifiCoolText from 'assets/img/logo/Nazifi_cool_text4x.png'

//const theme = useTheme()

const introStyles = theme => ({
    root: {
        //   height: '400vh',
        //   background: `linear-gradient(45deg, ${theme.palette.secondary.dark} 5%, ${theme.palette.secondary.light} 60%)`,
    
        // backgroundColor: `${theme.palette.background.default}`,
         height: '100vh'
        //   display: 'flex',
        //   flexWrap: 'wrap',
        //   '& > *': {
        //     margin: theme.spacing(1),
        //     width: theme.spacing(64),
        //     height: theme.spacing(64),
        //   },
        //   paddingTop: '200px'
        },
        backdrop:{
            //background: theme.palette.secondary.light,
            // position: 'absolute',
            // left:0,
            // right:0,
            // top:0,
            // bottom:0,

            // zIndex:-1,
            // opacity: 0.5
        },

        arbotek:{
          fontFamily: 'arbotek',
          color: theme.palette.secondary.dark,
          fontSize: '6em',
          [theme.breakpoints.down('sm')]: {
            fontSize: '2em'
          },
        },

        textBuffer:{
          marginTop: theme.spacing(6)
        },

        container:{
           paddingTop: theme.spacing(10),
           paddingBottom: theme.spacing(14),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
        },
    
        background: {
          //backgroundImage: `url(${NazifiCoolText})`,
          position: 'absolute',
          left:0,
          right:0,
          top:0,
          bottom:0,


          height: '100vh',
          // boxShadow: `0 4px 30px 2px rgba(${hexToRgb(theme.palette.background.default)}, .3)`,
          backgroundColor: theme.palette.background.default, // Average color of the background image.
          backgroundPosition: 'center',
          zIndex:-1,
          backgroundSize: '30%',
          backgroundRepeat: "no-repeat"

        },
    
        backgroundDefault: {
            position: 'relative',
            left:0,
            right:0,
            top:0,
            bottom:0,

            zIndex:-2,
            backgroundRepeat: "no-repeat"

            
        },
        h5: {
          // marginBottom: theme.spacing(4),
          // marginTop: theme.spacing(4),
          // [theme.breakpoints.up('sm')]: {
          //   marginTop: theme.spacing(10),
          // },
        },

        logo:{
          maxWidth: '40%',
          maxHeight: '40%',
          minWidth: '40%',
          minHeight: '40%',
        },

})


export default introStyles