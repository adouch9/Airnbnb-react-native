import {
  Button,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";

export default function SignUpScreen({ setToken }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Image source={require("../assets/images/logoairbnb.png")} />
      <Text style={styles.title}>SignUp</Text>
      <TextInput placeholder="email" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    color: "#919191",
  },
});
