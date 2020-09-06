import React, {useState} from 'react';
import logo from 'logo.svg';
import 'assets/css/App.css';



import Header from 'components/Header/Header';
import IntroSection from 'components/Sections/IntroSection/IntroSection';

import { LightTheme, DarkTheme } from 'assets/jss/nazifi-client-styles'

import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

import Footer from 'components/Footer/Footer';

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

import Body from 'components/Body/Body'

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

import Favorite from "@material-ui/icons/Favorite"

const useStyles = makeStyles(aboutUsStyle)

function App() {

  const [darkState, setDarkState] = useState(true)


  const handleThemeChange = () => {
      setDarkState(!darkState)
  }

  const classes = useStyles()

  return (
    
    <ThemeProvider theme={darkState ? DarkTheme : LightTheme}>
      
      <Header darkMode={darkState} themeChange={handleThemeChange}/>
      <IntroSection/>

      <Body/>

      <Footer>
        <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://discord.gg/c9Geysv"
                    className={classes.block}
                    target="_blank"
                  >
                    Discord
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href=""
                    className={classes.block}
                    target="_blank"
                  >
                    About us
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
                Devon Oberdan
            </div>
          </div>
      </Footer>
    </ThemeProvider>
  );
}

export default App;
