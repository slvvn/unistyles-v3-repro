import Button from "@/src/Button/Button";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

const styles = StyleSheet.create(() => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function IndexPage() {
  return (
    <View style={styles.container}>
      <Button onPress={() => console.log("Button pressed")}>Press me</Button>
    </View>
  );
}
