import { StyleSheet } from "react-native-unistyles";

const stylesheet = StyleSheet.create((theme, rt) => ({
  button: {
    paddingVertical: theme.spacing(2),
    paddingHorizontal: theme.spacing(6),
    width: rt.screen.width, // <-- This doesn't properly update on window resize
    backgroundColor: rt.screen.width > 500 ? "blue" : "green", // <-- This doesn't properly update on window resize
  },
  text: {
    textAlign: "center",
    color: "white",
  },
}));

export default stylesheet;
