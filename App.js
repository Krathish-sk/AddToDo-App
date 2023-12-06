import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import { colors } from "./assets/colors";
import AddTask from "./components/AddTask";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Display Todo field */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>My Todo List</Text>
        <View style={styles.items}>
          <Task text={"Hello Iam Krathish K"} />
        </View>
      </View>

      {/* Display User input field */}
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder="Add a Task" />
      </KeyboardAvoidingView> */}
      <AddTask />
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
