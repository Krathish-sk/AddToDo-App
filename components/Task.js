import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../assets/colors";

export default function Task(props) {
  const [completeTask, setCompleteTask] = useState(false);
  return (
    <View style={[styles.item, completeTask ? styles.completeTask : null]}>
      <Pressable onPress={() => setCompleteTask((prev) => !prev)}>
        <View style={styles.itemLeft}>
          <TouchableOpacity style={styles.square}></TouchableOpacity>
          <View style={styles.textContainer}>
            <Text
              style={[
                { fontFamily: "manrope-regular" },
                completeTask ? styles.completeTask : null,
              ]}
            >
              {props.text}
            </Text>
          </View>
        </View>
      </Pressable>
      <TouchableOpacity onPress={() => props.handleDeleteTask(props.index)}>
        <View style={styles.circular}></View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.lightBackground,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: colors.primary,
    borderWidth: 1,
  },
  completeTask: {
    backgroundColor: colors.completeTask,
    textDecorationLine: "line-through",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: colors.complete,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  textContainer: {
    width: "80%",
    justifyContent: "center",
  },
  circular: {
    width: 12,
    height: 12,
    backgroundColor: colors.delete,
    borderRadius: 5,
  },
});
