import Button from "@/src/Button/Button";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button preset="primary" onPress={() => console.log("Button pressed")}>
        Press me
      </Button>
    </View>
  );
}
