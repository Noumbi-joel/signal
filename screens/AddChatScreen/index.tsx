import { StyleSheet, Text, View } from "react-native";
import React from "react";

// rn navigation
import { useNavigation } from "@react-navigation/native";

// typings
import { AddChatScreenNavigationProp } from "../../typings";

const AddChatScreen = () => {
  const nav = useNavigation<AddChatScreenNavigationProp>();
  return (
    <View className="flex-1 items-center justify-center">
      <Text>AddChatScreen</Text>
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({});
