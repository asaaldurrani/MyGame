import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../Constants/Colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  Container: {
    borderWidth: 4,
    borderColor: Colors.yellow210,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  Text: { fontWeight: "bold", fontSize: 36 },
});
