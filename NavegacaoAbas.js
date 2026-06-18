import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaCadastro from "../telas/TelaCadastro";
import TelaLista from "../telas/TelaLista";
import TelaSobre from "../telas/TelaSobre";

const Tab = createBottomTabNavigator();

export default function NavegacaoAbas() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Cadastro"
        component={TelaCadastro}
      />

      <Tab.Screen
        name="Lista"
        component={TelaLista}
      />

      <Tab.Screen
        name="Sobre"
        component={TelaSobre}
      />
    </Tab.Navigator>
  );
}