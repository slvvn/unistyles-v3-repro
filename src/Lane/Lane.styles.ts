import { StyleSheet } from "react-native-unistyles";

const styles = StyleSheet.create(() => ({
  card: {
    variants: {
      type: {
        portrait: {
          width: 200,
          backgroundColor: "red",
          aspectRatio: 9 / 16,
        },
        landscape: {
          height: 200,
          backgroundColor: "yellow",
          aspectRatio: 16 / 9,
        },
      },
    },
  },
}));

export default styles;
