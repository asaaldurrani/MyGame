import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../Constants/Colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.ButtonContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary110 }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  ButtonContainer: {
    borderWidth: 2,
    borderColor: "black",
    paddingHorizontal: 35,
    borderRadius: 40,
    marginVertical: 8,
    paddingVertical: 3,
  },
  text: { fontWeight: "900", color: Colors.yellow210 },
});
