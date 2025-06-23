import { StyleSheet } from "react-native-unistyles";

const stylesheet = StyleSheet.create(
  (theme, { insets, isLandscape, colorScheme }) => {
    return {
      container: {
        padding: 32,

        // This updates well (based on colorScheme dependency)
        backgroundColor:
          colorScheme === "dark" ? "rgba(255,0,0,0.5)" : "rgba(0,255,0,0.5)",

        // These update well (based on isLandscape dependency)
        borderRadius: isLandscape ? 100 : 0,

        // These update well (based on insets dependency)
        marginLeft: insets.left,
        marginRight: insets.right,
        marginBottom: insets.bottom,
        marginTop: insets.top,
      },

      list: {
        marginVertical: 32,

        // This updates well (based on colorScheme dependency)
        backgroundColor:
          colorScheme === "dark" ? "rgba(255,0,0,0.5)" : "rgba(0,255,0,0.5)",

        // This does NOT update well (based on isLandscape dependency)
        borderRadius: isLandscape ? 100 : 0,

        // These does NOT update well (based on insets dependency)
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
        paddingTop: insets.top,
      },

      item: {
        padding: 32,

        // This updates well (based on colorScheme dependency)
        backgroundColor:
          colorScheme === "dark" ? "rgb(255,0,0)" : "rgb(0,255,0)",

        // This updates well (based on isLandscape dependency)
        borderRadius: isLandscape ? 100 : 0,
      },
    };
  }
);

export default stylesheet;
