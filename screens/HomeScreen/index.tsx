import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// rn navigation
import { useNavigation } from "@react-navigation/native";

// comp
import CustomListItem from "../../components/CustomListItem";
import { StatusBar } from "expo-status-bar";
import { Avatar } from "@rneui/themed";

// firebase
import { auth } from "../../lib/firebase.config";
import { signOut } from "firebase/auth";

// typings
import { HomeScreenNavigationProp } from "../../typings";

// icons
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const nav = useNavigation<HomeScreenNavigationProp>();

  const signOutUser = async () => {
    signOut(auth)
      .then(() => nav.replace("Login"))
      .catch((err) => alert(err.message));
  };

  useLayoutEffect(() => {
    nav.setOptions({
      headerLeft: () => (
        <View>
          <TouchableOpacity onPress={signOutUser}>
            <Avatar
              rounded
              source={{
                uri: auth?.currentUser?.photoURL!,
              }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View className="flex-row justify-around w-20">
          <TouchableOpacity>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate("AddChat")}>
            <SimpleLineIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
