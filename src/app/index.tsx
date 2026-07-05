import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { authClient } from "@/api/auth-client";

export default function Index() {
  const { data: session, isPending } = authClient.useSession();
  if (isPending) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#4f46e5" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Yo {session?.user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
