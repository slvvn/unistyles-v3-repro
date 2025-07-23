import { StyleSheet } from "react-native-unistyles";

const stylesheet = StyleSheet.create((theme, rt) => {
  return {
    wrapper: {
      width: "100%",
      height: "100%",
      paddingLeft: rt.insets.left,
      paddingRight: rt.insets.right,
      paddingTop: rt.insets.top,
      paddingBottom: rt.insets.bottom,
    },
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: theme.colors.primary,
      padding: 10,
      gap: 10,
    },
    button: {
      backgroundColor: theme.colors.background,
      padding: 10,
      borderRadius: 5,
    },
    element: {
      backgroundColor: {
        xs: theme.colors.success,
        md: theme.colors.danger,
      },
      padding: 10,
      borderRadius: 5,
    },
  };
});

export default stylesheet;
