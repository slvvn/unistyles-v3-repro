import { StyleSheet } from "react-native-unistyles";

const stylesheet = StyleSheet.create(() => {
  return {
    container: {
      padding: 32,
      borderWidth: 4,
      borderColor: {
        xs: "darkblue",
        md: "darkgreen",
      },
      backgroundColor: {
        xs: "lightblue",
        md: "lightgreen",
        lg: "lightyellow",
      },
    },
  };
});

export default stylesheet;
