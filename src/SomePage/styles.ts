import { mq, StyleSheet } from "react-native-unistyles";

const stylesheet = StyleSheet.create(() => {
  console.log("mq used in stylesheet", mq.only.width("lg"));
  return {
    container: {
      padding: 32,
      borderWidth: 4,
      borderColor: "lightblue",
    },
  };
});

export default stylesheet;
