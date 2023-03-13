import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import React, { useState } from "react";

// expo
import { StatusBar } from "expo-status-bar";

// rne
import { Button, Input, Text } from "@rneui/themed";

// firebase
import {
  createUserWithEmailAndPassword,
  updateProfile,
  UserCredential,
} from "firebase/auth";
import { auth } from "../../lib/firebase.config";
import { PROFILE_URL } from "../../raw/constants";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser: UserCredential) => {
        updateProfile(auth.currentUser!, {
          displayName: name,
          photoURL: imageUrl || PROFILE_URL,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      className="flex-1 bg-white items-center justify-center p-[10px]"
    >
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal Account
      </Text>

      <View className="w-[300px]">
        <Input
          placeholder="Full Name"
          value={name}
          onChangeText={(text) => setName(text)}
          containerStyle={styles.inputContainer}
        />
        <Input
          placeholder="Email"
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
        <Input
          placeholder="Profile Picture URL (optional)"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          containerStyle={styles.inputContainer}
        />
      </View>

      <Button
        containerStyle={styles.button}
        title="Register"
        raised
        onPress={register}
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

export const styles = StyleSheet.create({
  inputContainer: {},
  button: {
    width: 200,
    marginTop: 10,
  },
});
