import React from "react";
import { View, Text } from "react-native";
import { Hide, mq, UnistylesRuntime } from "react-native-unistyles";

import $ from "./styles";

const SomePage: React.FC = () => {
  console.log(UnistylesRuntime.breakpoints);
  return (
    <View style={$.container}>
      <Hide mq={mq.only.width("lg")}>
        <Text>Should be hidden only on large devices</Text>
      </Hide>
      <Text>MQ used: {mq.only.width("lg").toString()}</Text>
    </View>
  );
};

export default SomePage;
