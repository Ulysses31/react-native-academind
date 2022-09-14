import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalListItem from "./GoalListItem";

export default function GoalList({ goals, handleDelete }) {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        alwaysBounceVertical={false}
        data={goals}
        renderItem={(itemData) => {
          return (
            <GoalListItem itemData={itemData} handleDelete={handleDelete} />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 6,
    marginTop: 5
  },
});
