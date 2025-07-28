import { StyleSheet } from "react-native-unistyles";

const stylesheet = StyleSheet.create(({ colors }) => ({
  view: {
    flexGrow: 1,
    backgroundColor: colors.background,
  },
}));

export default stylesheet;
