import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [BMI, setBMI] = useState(0);

  const computeBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;
    const bmi = weightInKg / (heightInM * heightInM);
    setBMI(bmi);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={(text) => setHeight(text)}
      />
      <TouchableOpacity style={styles.button} onPress={computeBMI}>
        <Text style={styles.buttonText}>Calculate </Text>
      </TouchableOpacity>
      <Text style={styles.result}>BMI: {BMI.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdde1", // Cloudy Gray background
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2d3436", // Charcoal title
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#b2bec3", // Ash Gray border
    borderWidth: 1,
    padding: 10,
    margin: 10,
    color: "#2d3436", // Charcoal text
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "#6c5ce7", // Blueberry button
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff", // White text
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
    color: "#27ae60", // Nephritis result text
  },
});

export default BMICalculator;