import { Text, StyleSheet } from "react-native";
export const VisitCounter = (props) => (
	<Text style={styles.counter}>
		{props.id % 2 === 0
			? String(props.id * 123456 * 7).substring(0, 7)
			: String(props.id * 123456 * 7).substring(0, 6)}
	</Text>
);

const styles = StyleSheet.create({
	counter: {
		fontWeight: "bold",
	},
});
