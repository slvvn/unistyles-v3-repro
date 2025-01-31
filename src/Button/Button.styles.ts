import { PressableStateCallbackType } from "react-native";
import { mq, StyleSheet } from "react-native-unistyles";

const stylesheet = StyleSheet.create(({ colors, border, spacing }) => ({
  button: ({ pressed }: PressableStateCallbackType) => ({
    paddingVertical: spacing(2),
    paddingHorizontal: spacing(6),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // gap: spacing(2),
    // TODO: Not working in unistyles v3 now, see: https://github.com/jpudysz/react-native-unistyles/issues/534
    gap: {
      [mq.only.width(undefined, "sm")]: spacing(1),
      [mq.only.width("md")]: spacing(2),
    },
    variants: {
      preset: {
        primary: {
          backgroundColor: colors.backgroundFocus,
          color: colors.textInverted,
          borderColor: "transparent",
        },
        secondary: {
          backgroundColor: "transparent",
          color: colors.textDefault,
          borderColor: colors.borderDefault,
        },
      },
    },
  }),
}));

export default stylesheet;
