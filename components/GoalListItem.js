import React from "react";
import { StyleSheet, Image, Text, Pressable, View } from "react-native";

export default function GoalListItem({ itemData, handleDelete }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => handleDelete(itemData.item.text)}
      >
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/images/goal.png")}
            style={styles.image}
          />
          <Text style={styles.goalText}>{itemData.item.text}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 4,
    padding: 4,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#fff",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10
  },
  goalText: {
    color: "#fff",
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10
  },
});
