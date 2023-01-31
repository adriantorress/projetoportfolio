import { createContext, useEffect, useState } from "react";

export const Contexto = createContext({})

export const ContextProvider = ({ children }) => {
  const [screenStatus, setScreenStatus] = useState(false)
  const [navScreenOn, setNavScreenOn] = useState(false)
  const [screensOn, setScreensOn] = useState()

  useEffect(() => {
    setScreensOn(!screenStatus)

  }, [screenStatus])



  return (
    <Contexto.Provider value={{ screenStatus, setScreenStatus, navScreenOn, setNavScreenOn, screensOn, setScreensOn}}>
      {children}
    </Contexto.Provider>
  )
};
