import React from "react";
import { View } from "react-native";

import $ from "./PageLayout.styles";

const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <View style={$.view}>{children}</View>
);

export default PageLayout;
