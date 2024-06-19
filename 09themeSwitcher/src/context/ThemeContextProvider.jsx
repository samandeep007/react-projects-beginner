import React, {useState} from 'react'
import themeContext from './themeContext'

export default function ThemeContextProvider({children}) {
 const[mode, setMode] = useState(false)
    return (
    <themeContext.Provider value={{mode, setMode}}>
        {children}
    </themeContext.Provider>
  )
}
