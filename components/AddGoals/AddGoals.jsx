import { View, Modal, StyleSheet, Button, TextInput } from "react-native";
import React, { useState } from "react";

const AddGoals = ({ showModal, showModalHandler, addGoal }) => {
	const [goal, setGoal] = useState("");

	const goalInputHandler = (enteredText) => {
		setGoal(enteredText);
	};

	const addGoalHandler = () => {
		setGoal("");
		addGoal(goal);
		showModalHandler();
	};
	return (
		<Modal visible={showModal} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="What's your goal"
					style={styles.textInput}
					onChangeText={goalInputHandler}
					value={goal}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Add Goal" color="#74512D" onPress={addGoalHandler} />
					</View>
					<View style={styles.button}>
						<Button title="Cancel" color="#f31282" onPress={showModalHandler} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default AddGoals;

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: "#F8F4E1",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#AF8F6F",
		backgroundColor: "white",
		color: "black",
		width: "100%",
		borderRadius: 6,
		marginRight: 8,
		padding: 16,
	},
	buttonContainer: {
		marginTop: 20,
		flexDirection: "row",
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
});
