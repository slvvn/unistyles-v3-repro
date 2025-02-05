import Lane from "@/src/Lane/Lane";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { useQuery } from "@tanstack/react-query";

const useDataQuery = () => {
  return useQuery<
    { id: number; type: "portrait" | "landscape"; items: { index: number }[] }[]
  >({
    queryKey: ["data"],
    queryFn: () =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve([
            {
              id: 1,
              type: "portrait",
              items: [
                { index: 1 },
                { index: 2 },
                { index: 3 },
                { index: 4 },
                { index: 5 },
                { index: 6 },
                { index: 7 },
                { index: 8 },
                { index: 9 },
                { index: 10 },
                { index: 11 }, // <-- Adding the eleventh item will break the variants somehow on iOS
              ],
            },
            {
              id: 2,
              type: "landscape",
              items: [
                { index: 1 },
                { index: 2 },
                { index: 3 },
                { index: 4 },
                { index: 5 },
                { index: 6 },
                { index: 7 },
                { index: 8 },
                { index: 9 },
                { index: 10 },
              ],
            },
          ]);
        }, 1000)
      ),
  });
};

export default function Index() {
  const { data } = useDataQuery();
  if (!data) return <ActivityIndicator />;
  return (
    <ScrollView>
      {data.map((section) => (
        <View key={section.id}>
          <Lane type={section.type} items={section.items} />
        </View>
      ))}
    </ScrollView>
  );
}
