import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { ProvedorExercicios } from "./src/contexto/ContextoExercicios";
import NavegacaoAbas from "./src/navegacao/NavegacaoAbas";

export default function App() {
  return (
    <ProvedorExercicios>
      <NavigationContainer>
        <NavegacaoAbas />
      </NavigationContainer>
    </ProvedorExercicios>
  );
}