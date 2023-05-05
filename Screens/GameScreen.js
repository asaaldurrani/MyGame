import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../Component/Ui/Title";
import NumberContainer from "../Component/Game/NumberContainer";
import PrimaryButton from "../Component/Ui/PrimaryButton";
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, gameIsOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameIsOver();
    }
  }, [currentGuess, userNumber, gameIsOver]);

  function NextGuessHandler(Direction) {
    if (
      (Direction === "lower" && currentGuess < userNumber) ||
      (Direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", " you know that this is wrong.....", [
        { text: "sory!", style: "cancel" },
      ]);
      return;
    }
    if (Direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      userNumber
    );
    setCurrentGuess(newRndNumber);
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher OR Lower?</Text>
        <View>
          <PrimaryButton onPress={NextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={NextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 30,
  },
});
