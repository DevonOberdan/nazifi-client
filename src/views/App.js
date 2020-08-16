import React from 'react';
import logo from 'logo.svg';
import 'assets/css/App.css';
import Header from 'components/Header/Header';

import { colorTest, primaryColor, secondaryColor, otherColor } from 'assets/jss/nazifi-client-styles'

import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
      primary: primaryColor,
      secondary: secondaryColor,
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
    </ThemeProvider>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
