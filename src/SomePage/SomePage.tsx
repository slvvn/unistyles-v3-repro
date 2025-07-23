import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import $ from "./styles";
import { UnistylesRuntime } from "react-native-unistyles";

const SomePage: React.FC = () => {
  return (
    <View style={$.wrapper}>
      <View style={$.container}>
        <Text>This should never be outside of safe area</Text>

        <TouchableOpacity
          style={$.button}
          onPress={() => {
            UnistylesRuntime.setTheme(
              UnistylesRuntime.themeName === "alternate" ? "brand" : "alternate"
            );
          }}
        >
          <Text>Change theme</Text>
        </TouchableOpacity>

        <View style={$.element}>
          <Text>
            This should green in for sm screens and red for &gt; md screens
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SomePage;
