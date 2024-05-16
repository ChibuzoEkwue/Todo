import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import EmptyState from "./components/EmptyState/EmptyState";
import ShowTodo from "./components/ShowTodo/ShowTodo";
import AddGoals from "./components/AddGoals/AddGoals";
import AddGoalBtn from "./components/AddGoalBtn/AddGoalBtn";

export default function App() {
	const [showModal, setShowModal] = useState(true);
	const [goals, setGoals] = useState([]);

	const showModalHandler = () => {
		setShowModal(!showModal);
	};

	const addGoalHandler = (enteredGoalText) => {
		setGoals((prev) => [
			...prev,
			{ todo: enteredGoalText, id: Math.random().toString() },
		]);
	};

	const deleteGoalHandler = (id) => {
		console.log(id);
		setGoals((prev) => {
			return prev.filter((goal) => {
				return goal.id !== id;
			});
		});
	};
	return (
		<View style={styles.container}>
			{goals.length <= 0 ? (
				<EmptyState showModal={showModalHandler} />
			) : (
				<>
					<ShowTodo goals={goals} deleteGoal={deleteGoalHandler} />
					<AddGoalBtn showModal={showModalHandler} />
				</>
			)}
			<AddGoals
				showModal={showModal}
				showModalHandler={showModalHandler}
				addGoal={addGoalHandler}
			/>
			<StatusBar style="light" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		paddingTop: 70,
		position: "relative",
	},
});
