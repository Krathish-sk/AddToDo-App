import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../assets/colors";

export default function Task(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text styles={styles.itemText}>{props.text}</Text>
      </View>
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
  itemLeft: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "black",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: colors.complete,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    // borderColor: colors.delete,
    // borderWidth: 2,
    backgroundColor: colors.delete,
    borderRadius: 5,
  },
});
