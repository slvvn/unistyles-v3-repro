import React from "react";
import { Text, View } from "react-native";

import $ from "./styles";

const WorkingPage: React.FC = () => {
  return (
    <View style={$.item}>
      <Text>Item</Text>
      <View style={$.item} />
    </View>
  );
};

export default WorkingPage;
