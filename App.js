import { StatusBar } from "react-native";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Dimensions,
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
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      {/* Display Todo field */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>My Todo List</Text>
        <ScrollView style={styles.itemContainer}>
          <View style={styles.items}>
            {allTask.map((task, index) => {
              return (
                <Task
                  text={task}
                  index={index}
                  key={index}
                  handleDeleteTask={handleDeleteTask}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>

      {/* Display User input field */}
      <View style={styles.inputWrapper}>
        <AddTask handleAddTask={handleAddTask} />
      </View>
    </SafeAreaView>
  );
}

const statusBarHeight = StatusBar.currentHeight;

const screenHeight = Dimensions.get("window").height;

const contentHeight = Math.floor((screenHeight * 85) / 100);

const inputHeight = Math.floor(screenHeight - contentHeight);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingTop: statusBarHeight,
  },
  tasksWrapper: {
    paddingHorizontal: 20,
    height: contentHeight,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  itemContainer: {
    marginTop: 20,
  },
  items: {
    marginVertical: 20,
  },
  inputWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: inputHeight,
    justifyContent: "center",
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.primary,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flex: 2,
  },
});
