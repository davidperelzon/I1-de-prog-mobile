import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet
} from "react-native";

import { ContextoExercicios } from "../contexto/ContextoExercicios";

export default function TelaCadastro() {
  const { exercicios, setExercicios } = useContext(ContextoExercicios);

  const [nome, setNome] = useState("");
  const [grupoMuscular, setGrupoMuscular] = useState("");
  const [series, setSeries] = useState("");
  const [repeticoes, setRepeticoes] = useState("");

  function cadastrarExercicio() {
    if (
      nome.trim() === "" ||
      grupoMuscular.trim() === "" ||
      series.trim() === "" ||
      repeticoes.trim() === ""
    ) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    const novoExercicio = {
      id: String(Date.now()),
      nome,
      grupoMuscular,
      series,
      repeticoes
    };

    setExercicios([...exercicios, novoExercicio]);

    setNome("");
    setGrupoMuscular("");
    setSeries("");
    setRepeticoes("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Exercícios</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do exercício"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Grupo muscular"
        value={grupoMuscular}
        onChangeText={setGrupoMuscular}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade de séries"
        keyboardType="numeric"
        value={series}
        onChangeText={setSeries}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade de repetições"
        keyboardType="numeric"
        value={repeticoes}
        onChangeText={setRepeticoes}
      />

      <Button
        title="Cadastrar"
        onPress={cadastrarExercicio}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 12,
    padding: 10,
    borderRadius: 8
  }
});