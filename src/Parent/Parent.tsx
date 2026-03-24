import { View } from "react-native";
import { mq, StyleSheet } from "react-native-unistyles";

const styles = StyleSheet.create(({ spacing }) => ({
  root: {
    flex: 1,
  },
  actions: {
    marginVertical: spacing(20),
    gap: spacing(4),
    flex: {
      md: 1,
    },
  },
}));

type ParentProps = {
  children: React.ReactNode;
};

const Parent = ({ children }: ParentProps) => {
  return (
    <View style={styles.root}>
      <View style={styles.actions}>{children}</View>
    </View>
  );
};

export default Parent;
