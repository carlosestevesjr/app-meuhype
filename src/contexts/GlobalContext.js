import React, { useState, useContext, createContext } from "react";

export const GlobalContext = React.createContext({});

const GlobalProvider = ({ children }) => {

  const [appContext, setAppContext] = useState(
    {
      modalUpdatePasswordOpen: false
    }
  )

  function statusModalUpdatePassword(status) {
    setAppContext({
      ...appContext,
      modalUpdatePasswordOpen : status
    })
  }

  return (
    <GlobalContext.Provider
      value={
        {
          appContext,
          statusModalUpdatePassword,
        }
      }
    >
      {children}
    </GlobalContext.Provider>
  );

};

export default GlobalProvider;