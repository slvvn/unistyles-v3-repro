import { StyleSheet } from "react-native-unistyles";

const stylesheet = StyleSheet.create((theme) => {
  return {
    container: {
      padding: 32,
      backgroundColor: theme.colors.primary,
    },
  };
});

export default stylesheet;
