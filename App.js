import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./Screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./Screens/GameScreen";
import Colors from "./Constants/Colors";
import GameScreenOver from "./Screens/GameScreenOver";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setgameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  function gameOverHandler() {
    setgameIsOver(true);
  }
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} gameIsOver={gameOverHandler} />
    );
  }
  if (gameIsOver) {
    <GameScreenOver />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary110, Colors.yello200]}
      style={styles.Screen}
    >
      <ImageBackground
        source={require("./assets/bal.jpg")}
        resizeMode="cover"
        style={styles.Screen}
        imageStyle={styles.imagebackground}
      >
        <SafeAreaView style={{ flex: 1 }}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
  },
  imagebackground: {
    opacity: 0.15,
  },
});
