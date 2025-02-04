import React from "react";
import { Pressable, Text, useWindowDimensions } from "react-native";

import $ from "./Button.styles";

type Props = {
  children?: string;
  onPress: () => void;
};

const Button: React.FC<Props> = ({ children, onPress }) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Pressable accessibilityRole="button" onPress={onPress} style={$.button}>
        <Text accessibilityRole="text" style={$.text}>
          {children} (width: {$.button.width})
        </Text>
      </Pressable>

      <Text>Current window width: {width}</Text>
    </>
  );
};

export default Button;
