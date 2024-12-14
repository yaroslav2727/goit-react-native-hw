import { StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../styles/styles";

const Button = ({ children, onPress, buttonStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: colors.orange,
    borderRadius: 100,
  },
});

export default Button;
