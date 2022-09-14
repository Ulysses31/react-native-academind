import React from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";

export default function GoalInput({
  modalVisible,
  enterText,
  handleInput,
  handleButton,
  handleGoalInputModalEnd,
}) {
  return (
    <Modal visible={modalVisible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={handleInput}
          value={enterText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={handleButton} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={handleGoalInputModalEnd}
              color="#5e0acc"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cdcdcd",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 6,
    width: "95%",
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginTop: 20,
    marginHorizontal: 8,
  },
});
