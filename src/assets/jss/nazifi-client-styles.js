import React from 'react'


import { makeStyles, createMuiTheme } from "@material-ui/core/styles"

import {red, green} from "@material-ui/core/colors"

const colorTest = "#854464"

const nazifiWarmLight = { 
    light: "#EB6E7E",
    main: "#B25572",
    dark: "#854464"
}

const nazifiCoolLight = {
    light: "#01657F",
    main: "#003545",
    dark: "#16263D"
}

const nazifiWarmDark = { 
    light: "#F5BB93",
    main: "#FF8182",
    dark: "#EB6E7E"
}

const nazifiCoolDark = {
    light: "#79B2CD",
    main: "#01657F",
    dark: "#003545"
}

const otherColor = {
    light: "#eb6e7e",
    main: "#ff8182",
    dark: "#f5bb93"
}


const LightTheme = createMuiTheme({
    palette: {
      primary: nazifiCoolLight,
      secondary: nazifiWarmLight,
    }
})

const DarkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: nazifiWarmDark,
      secondary: nazifiCoolDark,
    }
})


export {LightTheme, DarkTheme}
