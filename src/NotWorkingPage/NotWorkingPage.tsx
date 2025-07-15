import React from "react";
import { Text, View } from "react-native";

import $ from "./styles";

const NotWorkingPage: React.FC = () => {
  $.useVariants({
    type: "a",
  });
  return (
    <View style={$.item}>
      <Text>Item</Text>
      <View style={$.item} />
    </View>
  );
};

export default NotWorkingPage;
