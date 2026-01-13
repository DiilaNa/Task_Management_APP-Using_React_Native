import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useLoader } from "@/hooks/useLoader";
import { login } from "@/services/authServices";

const Login = () => {
  const router = useRouter(); // import { useRouter } from "expo-router"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { showLoader, hideLoader, isLoading } = useLoader();

  const handleLogin = async () => {
    if (!email || !password || isLoading) {
      Alert.alert("Please enter email and password");
      return;
    }
    showLoader();
    try {
      await login(email, password);
      router.replace("/home");
    } catch (e) {
      console.error(e);
      Alert.alert("Login fail");
    } finally {
      hideLoader();
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {/* Container: Clean off-white background */}
      <View className="flex-1 justify-center items-center bg-slate-50 p-6">
        {/* Card: White card with softer, deeper shadows and larger rounding */}
        <View className="w-full max-w-sm bg-white rounded-[32px] p-8 shadow-xl shadow-slate-200 border border-slate-100">
          {/* Header */}
          <View className="mb-8">
            <Text className="text-3xl font-extrabold text-slate-800 text-center">
              Welcome Back
            </Text>
            <Text className="text-slate-500 text-center mt-2 font-medium">
              Sign in to access your TODOs
            </Text>
          </View>

          {/* Inputs: Lighter backgrounds, subtle borders, better padding */}
          <View className="space-y-4">
            <View>
              <Text className="text-slate-600 font-semibold mb-2 ml-1">
                Email
              </Text>
              <TextInput
                placeholder="hello@example.com"
                placeholderTextColor="#94a3b8"
                className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl text-slate-800 focus:border-indigo-500 focus:bg-white"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View>
              <Text className="text-slate-600 font-semibold mb-2 ml-1">
                Password
              </Text>
              <TextInput
                placeholder="••••••••"
                placeholderTextColor="#94a3b8"
                secureTextEntry={true}
                className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl text-slate-800 focus:border-indigo-500 focus:bg-white mb-6"
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>

          {/* Login Button: Indigo gradient feel with shadow */}
          <Pressable
            className="bg-indigo-600 w-full py-4 rounded-2xl shadow-lg shadow-indigo-200 active:bg-indigo-700"
            onPress={handleLogin}
          >
            <Text className="text-white text-lg font-bold text-center">
              Log In
            </Text>
          </Pressable>

          {/* Footer */}
          <View className="flex-row justify-center items-center mt-8 space-x-1">
            <Text className="text-slate-500 font-medium">
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                router.push("/register");
              }}
            >
              <Text className="text-indigo-600 font-bold text-base ml-1">
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;