import {
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

// r nav
import { useNavigation, StackActions } from "@react-navigation/native";

// rne
import { Button, Input, Image } from "@rneui/themed";

// status bar
import { StatusBar } from "expo-status-bar";

// const
import { SIGNAL_URL } from "../../raw/constants";

// typings
import { LoginScreenNavigationProp } from "../../typings";

// firebase
import { auth } from "../../lib/firebase.config";
import {
  signInWithEmailAndPassword,
  updateProfile,
  UserCredential,
} from "firebase/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigation<LoginScreenNavigationProp>();

  const signIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        authUser?.user ? () => nav.navigate("Home") : null;
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) nav.replace("Home");
    });

    return unsubscribe;
  }, []);

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
        />
        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
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
