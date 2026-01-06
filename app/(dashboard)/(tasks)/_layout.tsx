import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const TasksLayout = () => {
  return (
    <Stack>
        <Stack
      screenOptions={{
        headerShown: false
      }}
    ></Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="form" />
      <Stack.Screen name="[id]" />
    </Stack>
  );
};

export default TasksLayout;
