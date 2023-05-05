import { Alert, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import Colors from "../Constants/Colors";
import PrimaryButton from "../Component/Ui/PrimaryButton";

const StartGameScreen = ({ onPickedNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function restInputHandler() {
    setEnteredNumber("");
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "The number should be greater then 0 and less then 99",
        [{ text: "OKAY", style: "destructive", onPress: restInputHandler }]
      );
      return;
    }
    onPickedNumber(chosenNumber);
  }
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={styles.inputstyle}
          maxLength={2}
          keyboardType="phone-pad"
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
      </View>
      <View style={styles.ButtonContainer}>
        <PrimaryButton onPress={restInputHandler}>Rest</PrimaryButton>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 100,
    padding: 16,
    backgroundColor: Colors.primary100,
    elevation: 8,
    shadowColor: "black ",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 2,
  },
  ButtonContainer: {
    flexDirection: "row",
    paddingLeft: "20%",
    color: "",
  },
  inputstyle: {
    height: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: Colors.yello200,
    color: Colors.yello200,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    width: 50,
  },
});
