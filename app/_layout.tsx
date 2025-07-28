import { useEffect, useState } from "react";
import { View } from "react-native";
import { UnistylesRuntime } from "react-native-unistyles";

import PageLayout from "@/src/components/PageLayout/PageLayout";

const useSimulatedQuery = () => {
  const [data, setData] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData({
        background: "red",
      });
    }, Math.random() * 1000);
  }, []);
  return { data };
};

const Layout: React.FC = () => {
  const { data: someSimulatedRemoteTheme } = useSimulatedQuery();

  useEffect(() => {
    if (someSimulatedRemoteTheme) {
      UnistylesRuntime.updateTheme("brand", (currentTheme) => ({
        ...currentTheme,
        colors: {
          ...currentTheme.colors,
          ...someSimulatedRemoteTheme,
        },
      }));
    }
  }, [someSimulatedRemoteTheme]);

  return (
    <PageLayout>
      <View style={{ width: 100, height: 100, backgroundColor: "blue" }} />
    </PageLayout>
  );
};

export default Layout;
