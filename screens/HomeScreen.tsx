import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { palette } from "../theme";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

export default function HomeScreen() {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutLink}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Welcome Home</Text>
      <Text style={styles.description}>
        Ipsum exercitation velit cupidatat aliqua aliqua aute commodo nostrud
        pariatur tempor amet aute cupidatat est.
      </Text>
    </View>
  );
}

const styles = {
  mainContainer: tw`relative flex-1 items-center justify-center bg-[${palette.primary}]`,
  header: tw`text-white text-3xl font-semibold`,
  description: tw`text-white text-center px-8`,
  logoutLink: tw`absolute top-10 right-5 bg-yellow-500 p-2 rounded-tl-[20px] rounded-br-[20px] shadow-sm`,
};
