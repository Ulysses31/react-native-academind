import { useState } from "react";
import { Button, StatusBar, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [enterText, setEnterText] = useState("");
  const [goals, setGoals] = useState([]);

  const handleGoalInputModalStart = () => {
    setModalVisible(true);
  };

  const handleGoalInputModalEnd = () => {
    setModalVisible(false);
  };

  const handleInput = (e) => {
    setEnterText(e);
  };

  const handleDelete = (data) => {
    const tmpGoals = goals.filter((item) => {
      return item.text !== data;
    });
    setGoals(tmpGoals);
  };

  const handleButton = () => {
    setGoals([...goals, { text: enterText, key: Math.random().toString() }]);
    setEnterText('');
    handleGoalInputModalEnd();
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={handleGoalInputModalStart}
      />
      {modalVisible && (
        <GoalInput
          enterText={enterText}
          handleInput={handleInput}
          handleButton={handleButton}
          modalVisible={modalVisible}
          handleGoalInputModalEnd={handleGoalInputModalEnd}
        />
      )}
      <GoalList goals={goals} handleDelete={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
