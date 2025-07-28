import type { PropsWithChildren } from "react";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { UnistylesRuntime } from "react-native-unistyles";

const useSimulatedQuery = () => {
  const [data, setData] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ background: "blue" });
    }, 1000);
  }, []);

  return {
    data,
  };
};

const Core = ({ children }: PropsWithChildren) => {
  const { data: theme } = useSimulatedQuery();

  useEffect(() => {
    if (theme) {
      UnistylesRuntime.updateTheme("brand", (currentTheme) => ({
        ...currentTheme,
        colors: {
          ...currentTheme.colors,
          ...theme,
        },
      }));
    }
  }, [theme]);

  return children;
};

export const withCore = (Component: React.ComponentType) => () => (
  <Core>
    <Component />
  </Core>
);
