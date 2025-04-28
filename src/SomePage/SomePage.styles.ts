import { mq, StyleSheet } from "react-native-unistyles";

const stylesheet = StyleSheet.create(() => ({
  container: {
    padding: 32,
    borderWidth: 4,
    borderColor: "darkblue",
    backgroundColor: {
      [mq.only.width(undefined, "xl")]: "red",
      [mq.only.width("xl")]: "blue",
    },
  },
  list: {
    backgroundColor: "lightblue",
  },
}));

export default stylesheet;
