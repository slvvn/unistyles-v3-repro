import React, { useEffect } from "react";
import { Text, View } from "react-native";

import $ from "./styles";
import { UnistylesRuntime, useUnistyles } from "react-native-unistyles";

const SomePage: React.FC = () => {
  const { theme } = useUnistyles();
  console.log(theme.colors.primary);

  useEffect(() => {
    setTimeout(() => {
      UnistylesRuntime.updateTheme("brand", (theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: "red",
        },
      }));
    }, 1000);
  }, []);

  return (
    <>
      <View style={$.container}>
        <Text>Updating properly</Text>
      </View>
      <View style={{ backgroundColor: theme.colors.primary, padding: 32 }}>
        <Text>Not updating properly</Text>
      </View>
    </>
  );
};

export default SomePage;
