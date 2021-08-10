import React,{createContext,useState} from 'react'
export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    //State
    const [theme,setTheme] = useState({
        isLightTheme: true,
        light:{
            background: "rgb(240,240,240)",
            color: "black"
        },
        dark:{
            background: "rgb(39,39,39)",
            color: "white"
        }
        
    })
    // function to toggle theme
    const toggleTheme = () => {
        setTheme({
            ...theme,
            isLightTheme: !theme.isLightTheme
        })
    }

    // context data
    const ThemeContextData = {
        theme,
        toggleTheme
    }
    return (
        <ThemeContext.Provider value={ThemeContextData}>{children}</ThemeContext.Provider>
    )
}

export default ThemeContextProvider
