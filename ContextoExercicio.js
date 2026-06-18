import React, { createContext, useState } from "react";

export const ContextoExercicios = createContext();

export function ProvedorExercicios({ children }) {
  const [exercicios, setExercicios] = useState([]);

  return (
    <ContextoExercicios.Provider
      value={{
        exercicios,
        setExercicios
      }}
    >
      {children}
    </ContextoExercicios.Provider>
  );
}