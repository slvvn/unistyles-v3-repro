import { StyleSheet } from "react-native-unistyles";

const stylesheet = StyleSheet.create((theme) => {
  return {
    item: {
      aspectRatio: 16 / 9,
      width: {
        xs: 100,
        md: 300,
      },
      backgroundColor: {
        xs: theme.colors.primary,
        md: theme.colors.secondary,
      },
    },
  };
});

export default stylesheet;
