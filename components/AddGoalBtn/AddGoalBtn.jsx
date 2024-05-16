import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const AddGoalBtn = ({ showModal }) => {
	return (
		<View style={styles.addContainer}>
			<Pressable onPress={showModal}>
				<Text style={styles.textColor}>Add</Text>
			</Pressable>
		</View>
	);
};

export default AddGoalBtn;

const styles = StyleSheet.create({
	addContainer: {
		width: 80,
		height: 80,
		position: "absolute",
		right: 35,
		bottom: 35,
		backgroundColor: "#FF9F66",
		borderRadius: 40,
		alignItems: "center",
		justifyContent: "center",
	},
	textColor: {
		color: "white",
		fontSize: 15,
	},
});
