// copy to clipboard
const copyText= () => {
navigator.clipboard.writeText("copied");
  toast.success("Copied..!");
}

// useContext()
// ****************************** context file *******************************
import React, { createContext, useContext, useState } from "react";

const CustomizeContext = createContext();

export const useCustomizeContext = () => useContext(CustomizeContext);

export const CustomizeProvider = ({ children }) => {
  const [Metamaskaddress, setMetamaskaddress] = useState();
  
  const Commonlist = {
    Metamaskaddress, setMetamaskaddress,
  };

  return (
    <CustomizeContext.Provider
      value={{
        Commonlist,
      }}
    >
      {children}
    </CustomizeContext.Provider>
  );
}

// **************************************component **********************************
import { useCustomizeContext } from "../../Context/context";


 const {
    Commonlist: { Metamaskaddress },
  } = useCustomizeContext();
