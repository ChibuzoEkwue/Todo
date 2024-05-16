import { View, Text, StyleSheet, Image ,Pressable} from "react-native";
import React from "react";

const EmptyState = ({ showModal }) => {
	return (
		<View style={styles.emptyContainer}>
			<Image
				source={require("../../assets/empty.png")}
				style={styles.imgContainer}
			/>
			<Text style={styles.text}>Add your first Goal</Text>
			<View style={styles.addContainer}>
				<Pressable onPress={showModal}>
					<Text style={styles.textColor}>Add</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default EmptyState;

const styles = StyleSheet.create({
	emptyContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	imgContainer: {
		height: 190,
		width: 190,
		marginBottom: 20,
	},
	text: {
		fontSize: 18,
		color: "white",
	},
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
