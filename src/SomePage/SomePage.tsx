import React from "react";
import { FlatList, Text, View } from "react-native";

import $ from "./styles";

const SomePage: React.FC = () => {
  return (
    <>
      <View style={$.container}>
        <Text>Updating properly</Text>
      </View>

      <FlatList
        contentContainerStyle={$.list}
        data={Array.from({ length: 100 })}
        renderItem={({ index }) => (
          <View style={$.item}>
            <Text>Item {index}</Text>
          </View>
        )}
      />
    </>
  );
};

export default SomePage;
