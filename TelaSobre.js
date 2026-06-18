import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TelaSobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Sistema de gerenciamento de exercícios.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  texto: {
    fontSize: 18
  }
});