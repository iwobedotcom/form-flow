import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { createStaticNavigation } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPassword";
import useAuth from "../hooks/useAuth";

const AppStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: {
      if: () => useAuth().isSignedIn,
      screen: HomeScreen,
    },
    Welcome: {
      if: () => useAuth().isSignedOut,
      screen: WelcomeScreen,
    },
    Login: {
      if: () => useAuth().isSignedOut,
      screen: LoginScreen,
    },
    SignUp: {
      if: () => useAuth().isSignedOut,
      screen: SignUpScreen,
    },
    ForgotPassword: {
      if: () => useAuth().isSignedOut,
      screen: ForgotPasswordScreen,
    },
  },
});

export const AppNavigation = createStaticNavigation(AppStack);
