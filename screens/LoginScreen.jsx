import {
  Alert,
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { colors } from "../styles/styles";
import Input from "../components/Input";
import { useState } from "react";
import Button from "../components/Button";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);

  const handleEmailChange = value => {
    setEmail(value);
  };
  const handlePasswordChange = value => {
    setPassword(value);
  };

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert("Заповніть всі поля!");
      return;
    }
    console.log(`email: ${email}\npassword: ${password}`);
    Alert.alert("Авторизація успішна!");
    Keyboard.dismiss();
    setEmail("");
    setPassword("");
    setSecure(true);
  };

  const showButton = (
    <TouchableOpacity onPress={() => setSecure(prev => !prev)} style={styles.showButtonWrapper}>
      <Text style={styles.showButton}>{secure ? "Показати" : "Приховати"}</Text>
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "height" : "padding"}
      >
        <Image source={require("../assets/heroimg.jpg")} style={styles.image} resizeMode="cover" />

        <View style={styles.formContainer}>
          <Text style={styles.title}>Увійти</Text>

          <View style={[styles.innerContainer, styles.inputContainer]}>
            <Input
              placeholder="Адреса електронної пошти"
              value={email}
              onChangeText={handleEmailChange}
            />

            <Input
              placeholder="Пароль"
              rightButton={showButton}
              outerStyles={styles.passwordButton}
              value={password}
              onChangeText={handlePasswordChange}
              isSecure={secure}
            />
          </View>

          <View style={[styles.innerContainer, styles.buttonContainer]}>
            <Button onPress={handleSubmit}>
              <Text style={styles.loginButtonText}>Увійти</Text>
            </Button>

            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Немає акаунту? </Text>
              <TouchableOpacity>
                <Text style={[styles.signUpText, styles.signUpRef]}>Зареєструватися</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },

  innerContainer: { gap: 16 },

  inputContainer: { marginTop: 32 },

  buttonContainer: { marginTop: 43 },

  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
  },

  formContainer: {
    paddingHorizontal: 16,
    paddingTop: 32,
    position: "absolute",
    bottom: 0,
    width: SCREEN_WIDTH,
    height: "60%",
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 36,
    textAlign: "center",
  },

  showButtonWrapper: {
    position: "absolute",
    top: 0,
    right: 16,
    height: "100%",
    justifyContent: "center",
  },

  showButton: {
    fontSize: 16,
    lineHeight: 19,
    color: colors.blue,
  },

  passwordButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  loginButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    textAlign: "center",
  },

  signUpContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  signUpText: {
    color: colors.blue,
  },

  signUpRef: {
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
