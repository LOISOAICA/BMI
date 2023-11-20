import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [BMI, setBMI] = useState(0);
  const [obesityLevel, setObesityLevel] = useState("");

  const computeBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;
    const bmi = weightInKg / (heightInM * heightInM);
    setBMI(bmi);

    // Xác định cấp độ béo phì dựa trên chỉ số BMI
    if (bmi >= 32) {
      setObesityLevel("Béo phì cấp độ 3");
    } else if (bmi >= 28.5) {
      setObesityLevel("Béo phì cấp độ 2");
    } else if (bmi >= 23) {
      setObesityLevel("Béo phì cấp độ 1");
    } else if (bmi >= 18.5) {
      setObesityLevel("Bình thường");
    } else {
      setObesityLevel("Thiếu cân");
    }
  };

  const clearAll = () => {
    // Xóa tất cả các tính toán BMI
    setWeight("");
    setHeight("");
    setBMI(0);
    setObesityLevel("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tính Chỉ Số Khối Lượng Cơ Thể BMI</Text>
      <TextInput
        style={styles.input}
        placeholder="Cân nặng (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Chiều cao (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={(text) => setHeight(text)}
      />
      <TouchableOpacity style={styles.button} onPress={computeBMI}>
        <Text style={styles.buttonText}>Tính BMI</Text>
      </TouchableOpacity>
      <Text style={styles.result}>BMI: {BMI.toFixed(2)}</Text>
      <Text style={styles.obesityLevel}>Cấp độ béo phì: {obesityLevel}</Text>
      <TouchableOpacity style={styles.clearButton} onPress={clearAll}>
        <Text style={styles.clearButtonText}>Xóa</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdde1", // Màu nền xám
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2d3436", // Màu tiêu đề
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#b2bec3", // Màu viền xám nhạt
    borderWidth: 1,
    padding: 10,
    margin: 10,
    color: "#2d3436", // Màu chữ đen
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "#6c5ce7", // Màu nút xanh dương
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff", // Màu chữ trắng
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
    color: "#27ae60", // Màu chữ xanh lá cây
  },
  obesityLevel: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
    color: "#e74c3c", // Màu chữ đỏ
  },
  clearButton: {
    width: "80%",
    height: 40,
    backgroundColor: "#3498db", // Màu nút xanh dương nhạt
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  clearButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff", // Màu chữ trắng
  },
});

export default BMICalculator;

