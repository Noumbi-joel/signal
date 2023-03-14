import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

// rn navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ChatScreen from "../screens/ChatScreen";
import HomeScreen from "../screens/HomeScreen";
import AddChatScreen from "../screens/AddChatScreen";

// typings
import { RootStackParamList } from "../typings";

// const
import { globalScreenOptions } from "../raw/constants";

// init native stack
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={globalScreenOptions}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen
            name="Home"
            options={{
              headerTitleAlign: "center",
              headerBackVisible: false,
              title: "Signal",
              headerStyle: { backgroundColor: "white" },
              headerTitleStyle: { color: "black" },
              headerTintColor: "black",
            }}
            component={HomeScreen}
          />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="AddChat" component={AddChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
