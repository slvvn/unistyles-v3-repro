import React from "react";
import { Pressable, Text, useWindowDimensions } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type Props = {
  children?: string;
  onPress: () => void;
};

const styles = StyleSheet.create((theme, rt) => ({
  button: {
    // Scenario 1: Does NOT work
    padding: Math.max(rt.screen.width - 1400, 0) + theme.spacing(4),
    backgroundColor: "blue",

    // Scenario 2: Does work
    // padding: Math.max(rt.screen.width - 1400, 0) + theme.spacing(4),
    // backgroundColor: rt.screen.width > 500 ? "blue" : "green",
  },
  text: {
    textAlign: "center",
    color: "white",
  },
}));

const Button: React.FC<Props> = ({ children, onPress }) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        style={styles.button}
      >
        <Text accessibilityRole="text" style={styles.text}>
          {children}
        </Text>
      </Pressable>

      <Text>Current window width: {width}</Text>
    </>
  );
};

export default Button;
