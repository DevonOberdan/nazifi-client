import React, {useState} from 'react';
import logo from 'logo.svg';
import 'assets/css/App.css';



import Header from 'components/Header/Header';
import IntroSection from 'components/Sections/IntroSection/IntroSection';

//import { colorTest, primaryColor, secondaryColor, otherColor } from 'assets/jss/nazifi-client-styles'

import { LightTheme, DarkTheme } from 'assets/jss/nazifi-client-styles'

import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import FeaturesSection from 'components/Sections/FeaturesSection/FeaturesSection';



function App() {

  const [darkState, setDarkState] = useState(true)


  const handleThemeChange = () => {
      setDarkState(!darkState)
  }


  return (
    <ThemeProvider theme={darkState ? DarkTheme : LightTheme}>
      <Header darkMode={darkState} themeChange={handleThemeChange}/>
      <IntroSection/>
      <FeaturesSection/>
    </ThemeProvider>
  );
}

export default App;
