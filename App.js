import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "./assets/colors";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>My Todo List</Text>
        <View style={styles.items}>
          <Task text={"Hello"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});
