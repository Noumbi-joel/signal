import { StyleSheet, Text, View } from "react-native";
import React from "react";

// rne
import { Avatar, ListItem } from "@rneui/themed";

// const
import { PROFILE_URL } from "../../raw/constants";

// // firebase
// import { signOut } from "firebase/auth";
// import { auth } from "../../lib/firebase.config";

type Props = {
  id: string;
  chatName: string;
  enterChat: string;
};

const CustomListItem = ({ id, chatName, enterChat }: Props) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{ uri: PROFILE_URL }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          Youtube Chat
        </ListItem.Title>

        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is a test video
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
