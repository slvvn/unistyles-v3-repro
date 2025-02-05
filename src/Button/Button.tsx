import React from "react";
import { Pressable, Text, useWindowDimensions } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type Props = {
  children?: string;
  onPress: () => void;
};

const styles = StyleSheet.create((theme, rt) => ({
  button: {
    paddingVertical: theme.spacing(2),
    paddingHorizontal: theme.spacing(6),
    width: rt.screen.width, // <-- This doesn't properly update on window resize
    backgroundColor: rt.screen.width > 500 ? "blue" : "green", // <-- This doesn't properly update on window resize
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
          {children} (width: {styles.button.width})
        </Text>
      </Pressable>

      <Text>Current window width: {width}</Text>
    </>
  );
};

export default Button;
