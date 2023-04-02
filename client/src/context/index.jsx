import { createContext, useContext, useState } from "react";

const Context = createContext({});

export const Providers = ({ children }) => {
  const [hamburger, setHamburger] = useState(false);
  const [country, setCountry] = useState("Dubai");
  const [ask, setAsk] = useState({
    name: "",
    email: "",
    tel: "",
    mess: "",
  });

  const hamburgerTogggle = () => {
    setHamburger((hamburger) => !hamburger);
  };

  return (
    <Context.Provider
      value={{ hamburger, hamburgerTogggle, country, setCountry, ask, setAsk }}
    >
      {children}
    </Context.Provider>
  );
};

export const useParamContext = () => useContext(Context);
