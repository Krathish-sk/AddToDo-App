import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Task(props) {
  return (
    <View style={styles.item}>
      <View>
        <View></View>
        <Text>{props.text}</Text>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
  },
});
