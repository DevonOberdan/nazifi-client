import {makeStyles, useTheme} from '@material-ui/core/styles'

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

        container:{
            // marginTop: theme.spacing(14),
            // marginBottom: theme.spacing(14),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            

        },
    
        background: {
          // backgroundImage: `url(${NazifiWarmText})`,
    
           height: '100vh',
          // boxShadow: `0 4px 30px 2px rgba(${hexToRgb(theme.palette.background.default)}, .3)`,
           backgroundColor: theme.palette.secondary.dark, // Average color of the background image.
           backgroundPosition: 'center',
           zIndex:-1,

           
        },
    
        backgroundDefault: {
            position: 'absolute',
            left:0,
            right:0,
            top:0,
            bottom:0,


            zIndex:-2,
            backgroundSize: '30%',
            backgroundRepeat: "no-repeat"

            
        },
        h5: {
          // marginBottom: theme.spacing(4),
          // marginTop: theme.spacing(4),
          // [theme.breakpoints.up('sm')]: {
          //   marginTop: theme.spacing(10),
          // },
        },
        more: {
          // marginTop: theme.spacing(2),
        },
        logo:{
          maxWidth: '30%',
          maxHeight: '30%',
          minWidth: '30%',
          minHeight: '30%',
        },
})


export default introStyles