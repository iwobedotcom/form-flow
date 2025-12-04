import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { palette } from "../theme";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Let's Get Started</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/remote.png")}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => (navigation as any).navigate("SignUp")}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Start Journey</Text>
          </TouchableOpacity>
          <View style={styles.otContainer}>
            <Text style={styles.otAleady}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => (navigation as any).navigate("Login")}
            >
              <Text style={styles.otLogin}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  mainContainer: tw`flex-1 bg-[${palette.primary}]`,
  contentContainer: tw`flex-1 flex justify-around my-4`,
  header: tw`text-white font-bold text-3xl text-center`,
  imageContainer: tw`flex-row justify-center`,
  image: tw`w-60 h-60`,
  btnContainer: tw`gap-y-4`,
  btn: tw`py-2 bg-yellow-500 mx-7 rounded-xl`,
  btnText: tw`text-base font-semibold text-center text-black`,
  otContainer: tw`flex-row justify-center`,
  otAleady: tw`text-white font-semibold`,
  otLogin: tw`font-semibold text-black`,
};
