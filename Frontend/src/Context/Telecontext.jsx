import React, { createContext ,useState } from 'react'
import doctors from "../Components/Assest/doctor"




export const Telecontext = createContext(null);
const TelecontextProvider = (props) => {
  const [Tab, setTab] = useState("login")

    const contextValue = {
        doctors,
        Tab,
        setTab
    }


  return (
    <Telecontext.Provider value={contextValue}>
        {props.children}
    </Telecontext.Provider>
  )
}

export default TelecontextProvider
