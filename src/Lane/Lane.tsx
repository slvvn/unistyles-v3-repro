import React from "react";
import { FlatList, View } from "react-native";

import Card from "@/src/Card/Card";

import styles from "./Lane.styles";

type Props = {
  type: "portrait" | "landscape";
  items: { index: number }[];
};

const Lane: React.FC<Props> = ({ items, type }) => {
  styles.useVariants({ type });

  return (
    <FlatList
      horizontal
      data={items}
      contentContainerStyle={{ gap: 12 }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Card index={item.index} />
        </View>
      )}
    />
  );
};

export default Lane;
