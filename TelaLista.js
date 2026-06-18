import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import { ContextoExercicios } from "../contexto/ContextoExercicios";

export default function TelaLista() {
  const { exercicios, setExercicios } = useContext(ContextoExercicios);

  function removerExercicio(id) {
    const novaLista = exercicios.filter(
      exercicio => exercicio.id !== id
    );

    setExercicios(novaLista);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={exercicios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.nome}>
                {item.nome}
              </Text>

              <Text>
                Grupo: {item.grupoMuscular}
              </Text>

              <Text>
                Séries: {item.series}
              </Text>

              <Text>
                Repetições: {item.repeticoes}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => removerExercicio(item.id)}
            >
              <Text style={styles.textoBotao}>
                Remover
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold"
  },

  botao: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 8
  },

  textoBotao: {
    color: "#fff"
  }
});