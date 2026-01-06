import { View, Text, Pressable, SafeAreaView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();

  return (
    // SafeAreaView keeps content away from the notch/status bar
    <SafeAreaView className="flex-1 bg-purple-50">
      {/* Header Section: Title & Logout */}
      <View className="flex-row justify-between items-center px-6 pt-10 pb-4 bg-white/50 border-b border-purple-100">
        <View>
          <Text className="text-2xl font-extrabold text-purple-900">
            My Tasks
          </Text>
          <Text className="text-purple-400 font-medium text-sm">
            Let's get things done
          </Text>
        </View>

        {/* Logout Button: Clean white pill shape with purple text */}
        <Pressable
          className="bg-white px-5 py-2 rounded-xl border border-purple-100 shadow-sm shadow-purple-200 active:bg-purple-50"
          onPress={() => {
            // Navigate back to Login (assuming index is your login)
            router.replace("/");
          }}
        >
          <Text className="text-purple-600 font-bold text-sm">Log Out</Text>
        </Pressable>
      </View>

      {/* Main Content Area */}
      <View className="flex-1 p-6">
        {/* Placeholder for Task List (Empty State) */}
        <View className="flex-1 justify-center items-center bg-white rounded-[32px] border border-purple-100 shadow-xl shadow-purple-100/50 p-8">
          <Text className="text-purple-200 text-6xl mb-4">📝</Text>
          <Text className="text-purple-900 font-bold text-xl mb-2">
            No Tasks Yet
          </Text>
          <Text className="text-purple-400 text-center leading-relaxed">
            You are all caught up!{"\n"}Tap the button below to add a new task.
          </Text>

          {/* Floating Action Button (FAB) Style placeholder */}
          <Pressable className="mt-8 bg-purple-600 px-8 py-4 rounded-2xl shadow-lg shadow-purple-300 active:bg-purple-700">
            <Text className="text-white font-bold text-lg">+ Add Task</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
