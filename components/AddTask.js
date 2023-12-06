import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  Alert,
} from "react-native";
import { useState } from "react";
import { colors } from "../assets/colors";

export default function AddTask({ handleAddTask }) {
  const [task, setTask] = useState("");

  function handleSubmitTask() {
    if (task === "") {
      Alert.alert("Empty Task !!", "Please add an Task before submitting.", [
        { text: "Ok", style: "default" },
      ]);
      return;
    } else handleAddTask(task);
    setTask("");
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "height" : "padding"}
      style={styles.writeTaskWrapper}
    >
      <TextInput
        placeholder="Add a Task"
        style={styles.input}
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity onPress={handleSubmitTask}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  writeTaskWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: colors.lightBackground,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.primary,
    borderWidth: 1,
  },
  addText: {},
});
