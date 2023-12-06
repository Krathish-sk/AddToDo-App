import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <View>
      <StatusBar style="dark" />
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>My Todo List</Text>
        <View style={styles.items}>
          <Task />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  tasksWrapper: {},
  sectionTitle: {},
  items: {},
});
