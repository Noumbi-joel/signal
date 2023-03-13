import {
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

// r nav
import { useNavigation } from "@react-navigation/native";

// rne
import { Button, Input, Image } from "@rneui/themed";

// status bar
import { StatusBar } from "expo-status-bar";

// const
import { SIGNAL_URL } from "../../raw/constants";

// typings
import { LoginScreenNavigationProp } from "../../typings";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigation<LoginScreenNavigationProp>();

  const signIn = () => {}
  return (
    <KeyboardAvoidingView
      behavior="padding"
      className="flex-1 bg-white items-center justify-center p-[10px]"
    >
      <StatusBar style="light" />
      <Image
        source={{ uri: SIGNAL_URL }}
        PlaceholderContent={<ActivityIndicator color="#2C6BED" size="small" />}
        style={{ width: 200, height: 200 }}
      />

      <View className="w-[300px]">
        <Input
          placeholder="Email"
          autoFocus
          value={email}
          onChangeText={(text) => setEmail(text)}
          containerStyle={styles.inputContainer}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          containerStyle={styles.inputContainer}
        />
      </View>

      <Button title="Login" containerStyle={styles.button} onPress={signIn} />
      <Button
        type="outline"
        title="Register"
        containerStyle={styles.button}
        onPress={() => nav.navigate("Register")}
      />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

export const styles = StyleSheet.create({
  button: {
    width: 200,
    marginTop: 10,
  },
});
