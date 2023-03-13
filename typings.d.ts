export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Chat: undefined;
};

export type AuthStackNavigatorParamList = {
  Login: undefined;
  Register: undefined;
};

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  "Register"
>;
