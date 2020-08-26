import { makeStyles, createMuiTheme } from "@material-ui/core/styles"

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


const rawTheme = createMuiTheme({
    typography: {
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 14,
        fontWeightLight: 300, // Work Sans
        fontWeightRegular: 400, // Work Sans
        fontWeightMedium: 700, // Roboto Condensed
        fontFamilySecondary: "'Roboto Condensed', sans-serif",
      }
})

const fontHeader = {
    color: rawTheme.palette.text.primary,
    fontWeight: rawTheme.typography.fontWeightMedium,
    fontFamily: rawTheme.typography.fontFamilySecondary,
    textTransform: 'uppercase',
  };



  const theme = {
    ...rawTheme,
    typography: {
      ...rawTheme.typography,
      fontHeader,
      h1: {
        ...rawTheme.typography.h1,
        ...fontHeader,
        letterSpacing: 0,
        fontSize: 60,
      },
      h2: {
        ...rawTheme.typography.h2,
        ...fontHeader,
        fontSize: 48,
      },
      h3: {
        ...rawTheme.typography.h3,
        ...fontHeader,
        fontSize: 42,
      },
      h4: {
        ...rawTheme.typography.h4,
        ...fontHeader,
        fontSize: 30,
      },
      h5: {
        ...rawTheme.typography.h5,
        fontSize: 20,
        fontWeight: rawTheme.typography.fontWeightLight,
      },
      h6: {
        ...rawTheme.typography.h6,
        ...fontHeader,
        fontSize: 18,
      },
      subtitle1: {
        ...rawTheme.typography.subtitle1,
        fontSize: 18,
      },
      body1: {
        ...rawTheme.typography.body2,
        fontWeight: rawTheme.typography.fontWeightRegular,
        fontSize: 16,
      },
      body2: {
        ...rawTheme.typography.body1,
        fontSize: 14,
      },
    },
  };

const LightTheme = createMuiTheme({
    ...theme,
    palette: {
      primary: nazifiCoolLight,
      secondary: nazifiWarmLight,
    }
})

const DarkTheme = createMuiTheme({
    ...theme,
    palette: {
      type: 'dark',
      primary: nazifiCoolDark,
      secondary: nazifiWarmDark,
    }
})


export {LightTheme, DarkTheme}
