import React from 'react'

import sectionStyle from 'assets/jss/sectionStyles'

import IntroSectionLayout from 'components/Sections/IntroSection/IntroSectionLayout'

import { makeStyles} from "@material-ui/core/styles";

import { Container, Typography } from '@material-ui/core';

import NazifiCool from 'assets/img/logo/Nazifi_cool4x.png'
import NazifiCoolText from 'assets/img/logo/Nazifi_cool_text4x.png'
import NazifiCoolDark from 'assets/img/logo/Nazifi_cool-dark4x.png'
import NazifiWarm from 'assets/img/logo/Nazifi_warm4x.png'
import NazifiWarmText from 'assets/img/logo/Nazifi_warm_text4x.png'

import introStyles from 'components/Sections/IntroSection/introStyles'

import Fade from "react-reveal/Fade"

import classNames from 'classnames'

const useStyles = makeStyles(introStyles)
  
  export default function IntroSection() {
    const classes = useStyles();
  
    return (
      <IntroSectionLayout backgroundClassName={classes.background}>
          <Fade delay = {500} duration={3000}>
            <img className={classes.logo} src={NazifiWarm}/>



            <Typography
              // color="primary"
              align="center"
              variant="h1"
              className={classes.arbotek}
            >
              N A Z I F I
            </Typography>

          </Fade>

            {/* <Typography
              color="textPrimary"
              align="center"
              variant="h1"
              className={classes.arbotek}
            >
              <Fade bottom delay={500}>
                NAZIFI
              </Fade>
            </Typography> */}
          <Fade cascade bottom delay={2000}>

            <Typography
              color="textPrimary"
              align="center"
              variant="h5"
              className={classes.textBuffer}
            >
              Discord Backups for your Enterprise.
            </Typography>
          </Fade>


          <div className={classes.backdrop}></div> 
          <div className={classNames(classes.background)}/>
      </IntroSectionLayout>
    );
  }


