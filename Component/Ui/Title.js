import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../Constants/Colors";

const Title = ({ children }) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.yellow210,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.yellow210,
    padding: 12,
  },
});
