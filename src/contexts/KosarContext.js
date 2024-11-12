import { createContext, useState } from "react";

export const KosarContext = createContext("");

export const KosarProvider = ({ children }) => {
  const [kosarLista, setKosarLista ]  = useState([]);

    function kosarba(termek) {
        const segedLista = [...kosarLista]
        segedLista.push(termek)
        setKosarLista([...segedLista])
    }

return (
    <KosarContext.Provider value={{ kosarLista,kosarba }}>
      {children}
    </KosarContext.Provider>
  );
};