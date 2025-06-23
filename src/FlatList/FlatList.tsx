import { withUnistyles } from "react-native-unistyles";
import { FlatList as RNFlatList } from "react-native";

const FlatList = withUnistyles(RNFlatList) as unknown as typeof RNFlatList;

export default FlatList;
