import { StyleSheet } from "react-native-unistyles";

const stylesheet = StyleSheet.create((theme, { insets }) => {
  return {
    list: {
      paddingVertical: 10,
    },
    listContent: {
      paddingLeft: insets.left + 10,
      paddingRight: insets.right + 10,
      gap: 10,
    },
    item: {
      backgroundColor: "blue",
    },
    itemInner: {
      backgroundColor: "red",
    },
    itemList: {
      paddingVertical: 10,
    },
    itemListContent: {
      gap: 10,
    },
  };
});

export default stylesheet;
