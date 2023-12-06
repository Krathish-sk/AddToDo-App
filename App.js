import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Keyboard,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { colors } from "./assets/colors";
import AddTask from "./components/AddTask";
import Task from "./components/Task";

export default function App() {
  const [allTask, setAllTask] = useState(["Hello", "Walk the dog"]);

  function handleAddTask(task) {
    Keyboard.dismiss();
    setAllTask([task, ...allTask]);
  }

  function handleDeleteTask(index) {
    let itemCopy = [...allTask];
    itemCopy.splice(index, 1);
    setAllTask(itemCopy);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar style="dark" />
        {/* Display Todo field */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>My Todo List</Text>
          <View style={styles.items}>
            {allTask.map((task, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleDeleteTask(index)}
                >
                  <Task text={task} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Display User input field */}
      <View style={styles.inputWrapper}>
        <AddTask handleAddTask={handleAddTask} />
      </View>
    </SafeAreaView>
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
  inputWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "15%",
    justifyContent: "center",
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.primary,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
