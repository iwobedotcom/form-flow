import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import { palette } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import { emailAtom, fullNameAtom, passwordAtom } from "../atoms/signUpAtoms";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useAtom(emailAtom);
  const [fullName, setFullName] = useAtom(fullNameAtom);
  const [password, setPassword] = useAtom(passwordAtom);

  const handleSignUp = async () => {
    if (!fullName || !email || !password) {
      Alert.alert("Error", "Please fill out the form");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed up:", userCredential.user);
      // You can navigate to Home or show a success message here
    } catch (error: any) {
      console.error("Sign-up error:", error);
      Alert.alert(
        "Sign-up failed",
        error.message || "An unexpected error occurred"
      );
    }
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.contentContainer}>
        <View style={styles.backBtnContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backBtn}
          >
            <ArrowLeftIcon size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/content.png")}
            style={styles.image}
          />
        </View>
      </SafeAreaView>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter full name"
            style={styles.input}
          />

          <Text style={styles.label}>Email Address</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email address"
            style={styles.input}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity
            onPress={() => (navigation as any).navigate("ForgotPassword")}
            style={styles.forgetPassOp}
          >
            <Text style={styles.forgetPassText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignUp} style={styles.loginBtnOp}>
            <Text style={styles.loginBtn}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.orText}>Or</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialContent}>
            <Image
              style={styles.socialImage}
              source={require("../assets/google.png")}
              alt="Google"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialContent}>
            <Image
              style={styles.socialImage}
              source={require("../assets/facebook.png")}
              alt="Google"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialContent}>
            <Image
              style={styles.socialImage}
              source={require("../assets/apple.png")}
              alt="Google"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.otContainer}>
          <Text style={styles.otAleady}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => (navigation as any).navigate("Login")}
          >
            <Text style={styles.otLogin}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = {
  mainContainer: tw`flex-1 h-full bg-[${palette.primary}]`,
  contentContainer: tw`flex px-4 py-2`,
  backBtnContainer: tw`flex-row justify-start`,
  backBtn: tw`bg-yellow-500 p-2 rounded-tr-2xl rounded-bl-2xl shadow-sm`,
  imageContainer: tw`flex-row justify-center`,
  image: tw`w-[70px] h-[70px]`,
  formContainer: tw`flex-1 bg-white px-8 pt-6 rounded-l-2xl rounded-r-2xl`,
  form: tw`flex-col gap-y-2`,
  label: tw`text-gray-700 ml-4`,
  input: tw`p-3 bg-gray-100 text-gray-700 rounded-2xl`,
  forgetPassOp: tw`flex items-end mb-2`,
  forgetPassText: tw`text-gray-700`,
  loginBtnOp: tw`py-2 bg-yellow-500 rounded-xl`,
  loginBtn: tw`text-base font-semibold text-center text-gray-700`,
  orText: tw`text-lg text-gray-700 font-bold text-center py-2`,
  socialContainer: tw`flex-row justify-center gap-x-8`,
  socialContent: tw`p-2 bg-gray-100 rounded-2xl`,
  socialImage: tw`w-6 h-6`,
  otContainer: tw`flex-row justify-center pt-4`,
  otAleady: tw`text-gray-700 font-semibold`,
  otLogin: tw`font-semibold text-yellow-500`,
};
