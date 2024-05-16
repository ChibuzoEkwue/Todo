import { View, FlatList, StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const ShowTodo = ({ goals, deleteGoal }) => {
	return (
		<View style={styles.container}>
			<View style={styles.goals}>
				<Text style={styles.goalsText}>My Goals</Text>
				<FlatList
					data={goals}
					alwaysBounceVertical={false}
					renderItem={(itemData) => {
						return (
							<Pressable
								onPress={deleteGoal.bind(this, itemData.item.id)}
							>
								<View style={styles.goalContainer}>
									<Text style={styles.textColor}>{itemData.item.todo}</Text>
								</View>
							</Pressable>
						);
					}}
					keyExtractor={(item, index) => item.id}
				/>
			</View>
		</View>
	);
};

export default ShowTodo;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 30,
	},
	goals: {
		gap: 30,
	},
	goalsText: {
		fontSize: 22,
		fontWeight: "300",
	},
	goalContainer: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		padding: 18,
		backgroundColor: "#543310",
		borderRadius: 10,
		marginTop: 10,
		marginBottom: 10,
	},
	textColor: {
		color: "white",
		fontSize: 15,
	},
});
