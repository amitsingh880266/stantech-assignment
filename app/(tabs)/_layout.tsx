import { Stack } from "expo-router";
import React from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  index: undefined;
  "add-task": undefined;
  "edit-task": { id: number };
};

export type NavigationProp = StackNavigationProp<RootStackParamList, "index">;

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="add-task"
        options={{
          title: "Add Task",
        }}
      />
      <Stack.Screen
        name="edit-task"
        options={{
          title: "Edit Task",
        }}
      />
    </Stack>
  );
}
