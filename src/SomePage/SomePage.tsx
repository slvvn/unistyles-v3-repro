import React from "react";
import { View } from "react-native";

import $ from "./SomePage.styles";
import { UnistylesRuntime } from "react-native-unistyles";

const SomePage: React.FC = () => {
  return <View style={$.container}>{UnistylesRuntime.breakpoint}</View>;
};

export default SomePage;
