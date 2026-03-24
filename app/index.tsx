import { View } from "react-native";

import Component from "@/src/Component/Component";
import Parent from "@/src/Parent/Parent";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <Parent>
        <Component preset="primary" label="INTRO/PAGE/SIGN_IN/CTA/LABEL" />
      </Parent>
    </View>
  );
}
