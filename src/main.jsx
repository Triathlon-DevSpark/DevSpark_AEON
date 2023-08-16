// Other imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Loading CSS
import "./index.css"

// Loading Fonts
import "@fontsource-variable/syne"
import "@fontsource/syncopate"
import "@fontsource/dm-sans"

// Creating a custom theme
const darkTheme = createTheme({
  // Custom color palette
  palette: {
    mode: 'dark',
    primary: {
      main: "#9554ff"
    },
    secondary: {
      main: "#515151"
    },
    secondaryLight: {
      main: "#c8c8c8"
    },
    secondaryDark: {
      main: "#2b2b2b"
    },
    black: {
      main: "#020202"
    },
    blackLight: {
      main: "#101010"
    },
  },

  // Custom font sizes
  typography: {
    fontFamily: ["syne", "sans-serif"].join(","),
    h1: {
      fontSize: "32px"
    },
    h2: {
      fontSize: "30px"
    },
    h3: {
      fontSize: "24px"
    },
    h4: {
      fontSize: "20px"
    },
    h5: {
      fontSize: "18px"
    },
    h6: {
      fontSize: "16px"
    },
    p: {
      fontSize: "16px"
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
)