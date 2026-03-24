import { Pressable } from "react-native";
import Animated from "react-native-reanimated";
import { StyleSheet } from "react-native-unistyles";

const button$ = StyleSheet.create(({ spacing }) => ({
  pressable: {
    minHeight: spacing(12),
    paddingHorizontal: spacing(5),
    paddingVertical: spacing(3),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 2,
    variants: {
      preset: {
        primary: {
          backgroundColor: "#2563eb",
          borderColor: "transparent",
        },
        secondary: {
          backgroundColor: "#e5e7eb",
          borderColor: "transparent",
        },
      },
    },
  },
  label: {
    color: "blue",
    variants: {
      preset: {
        primary: {
          color: "#ffffff",
        },
        secondary: {
          color: "#111827",
        },
      },
    },
  },
}));

function ButtonLabel({
  labelStyle,
  children,
}: {
  labelStyle: (typeof button$)["label"];
  children: string;
}) {
  return <Animated.Text style={labelStyle}>{children}</Animated.Text>;
}

type ComponentProps = {
  preset: "primary" | "secondary";
  label: string;
};

const Component = ({ preset, label }: ComponentProps) => {
  button$.useVariants({ preset });

  return (
    <Pressable style={button$.pressable}>
      <ButtonLabel labelStyle={button$.label}>{label}</ButtonLabel>
    </Pressable>
  );
};

export default Component;
