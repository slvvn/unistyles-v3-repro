import { StyleSheet } from "react-native-unistyles";

const stylesheet = StyleSheet.create((theme) => {
  return {
    item: {
      variants: {
        type: {
          a: {
            aspectRatio: 16 / 9,
            width: {
              xs: 100,
              sm: 200,
              md: 300,
            },
            backgroundColor: {
              xs: theme.colors.primary,
              md: theme.colors.secondary,
            },
          },
          b: {
            aspectRatio: 9 / 16,
            width: {
              xs: 100,
              sm: 200,
              md: 300,
            },
            backgroundColor: {
              xs: theme.colors.primary,
              md: theme.colors.secondary,
            },
          },
        },
      },
    },
  };
});

export default stylesheet;
