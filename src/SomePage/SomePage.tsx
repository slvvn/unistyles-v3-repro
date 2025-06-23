import React from "react";
import { SectionList, StyleProp, Text, View, ViewStyle } from "react-native";

import FlatList from "@/src/FlatList/FlatList";

import $ from "./styles";
import { withUnistyles } from "react-native-unistyles";

const Item = ({
  style,
  innerStyle,
}: {
  style?: StyleProp<ViewStyle>;
  innerStyle?: StyleProp<ViewStyle>;
}) => (
  <View style={style}>
    <View style={innerStyle}>
      <Text>Item</Text>
    </View>
  </View>
);

const UniItem = withUnistyles(Item);

const SomePage: React.FC = () => {
  const renderItem = ({ item }: { item: { id: number; title: string } }) => (
    <UniItem style={$.item} innerStyle={$.itemInner} />
  );

  const renderSection = ({ item }: { item: { id: number; title: string } }) => (
    <View style={$.item}>
      <Text>{item.title}</Text>
      <FlatList
        horizontal
        style={$.itemList}
        contentContainerStyle={$.itemListContent}
        data={Array.from({ length: 10 }, (_, index) => ({
          id: index,
          title: `Item ${index}`,
        }))}
        renderItem={renderItem}
      />
    </View>
  );

  return (
    <SectionList
      style={$.list}
      contentContainerStyle={$.listContent}
      sections={[
        {
          data: Array.from({ length: 10 }, (_, index) => ({
            id: index,
            title: `Section ${index}`,
          })),
        },
      ]}
      renderItem={renderSection}
    />
  );
};

export default SomePage;
