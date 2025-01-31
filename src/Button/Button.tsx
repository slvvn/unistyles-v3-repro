import React from "react";
import { Pressable, View, Text } from "react-native";

import $ from "./Button.styles";

type Props = {
  preset: "primary" | "secondary";
  children?: string;
  onPress: () => void;
};

const Button: React.FC<Props> = ({ preset, children, onPress }) => {
  $.useVariants({ preset });

  return (
    <Pressable accessibilityRole="button" onPress={onPress}>
      {(state) => (
        <View style={$.button(state)}>
          <Text accessibilityRole="text">
            {children}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default Button;
