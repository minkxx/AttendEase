import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { authClient } from "../../api/auth-client";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
      fetchOptions: {
        onError: (ctx) => {
          Alert.alert("Authentication Failed", ctx.error.message);
        },
      },
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title="Sign In" onPress={handleLogin} color="#4f46e5" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    padding: 8,
  },
});
