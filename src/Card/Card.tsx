import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type Props = {
  index: number;
};

const styles = StyleSheet.create(() => ({
  card: {},
}));

const Card: React.FC<Props> = ({ index }) => {
  return (
    <>
      <View style={styles.card}>
        <Text accessibilityRole="text">{index}</Text>
      </View>
    </>
  );
};

export default Card;
