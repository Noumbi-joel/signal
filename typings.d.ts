export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Chat: undefined;
};

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export type AddChatScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "AddChat"
>;
