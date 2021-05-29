import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

const darkTheme = {
    isDark: true,
    background: '#12191F',
    primary: 'lightblue',
    secondary: 'pink',
  }
  const lightTheme = {
    isDark: false,
    background: '#FFF',
    primary: '#000',
    secondary: 'palevioletred',
  }


// Don't parse it because "unset" is also a valid value
const savedIsDarkMode = localStorage.getItem('dark')
// Leverage matchMedia API to check if the system prefers dark mode
const prefersDarkMode = matchMedia('(prefers-color-scheme: dark)').matches

// Get usable isDarkMode
const getIsDarkMode = () => {
    // Checks if user has a preference already set and use it
    // If not set, then try to select mode by detecting system preference
    switch (savedIsDarkMode) {
      case 'true':
        return true
      case 'false':
        return false
      default:
        return prefersDarkMode
    }
  }



  export const ThemeModeContext = React.createContext({
    theme: getIsDarkMode() ? darkTheme : lightTheme,
    setIsDarkMode: () => {},
  })

  // THEME COMPONENT FOR CONTEXT...
  export const ThemeModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(getIsDarkMode())

    useEffect(() => {
      localStorage.setItem('dark', JSON.stringify(isDarkMode))
    }, [isDarkMode])

    const mode = {
      theme: isDarkMode ? darkTheme : lightTheme,
      setIsDarkMode,
    }

    return (
      <ThemeModeContext.Provider value={mode}>
        <ThemeProvider theme={mode.theme}>{children}</ThemeProvider>
      </ThemeModeContext.Provider>
    )
  }