import { StyleSheet, Image, View } from "react-native";

export const MainHeader = () => (
	<View style={styles.header}>
		<View style={styles.logoAndArrowDownWrapper}>
			<Image
				style={styles.instaCloneAppLogo}
				source={require("../../img/InstaCloneApp.png")}
			/>
			<Image
				style={styles.arrowDown}
				source={require("../../img/arrowDown.png")}
			/>
		</View>
		<View style={styles.actionRightIconsWrapper}>
			<Image
				style={styles.plusIcon}
				source={require("../../img/plus.png")}
			/>
			<Image
				style={styles.heartTopIcon}
				source={require("../../img/heartTop.png")}
			/>
			<Image
				style={styles.sendTopIcon}
				source={require("../../img/sendTop.png")}
			/>
		</View>
	</View>
);

const styles = StyleSheet.create({
	header: {
		backgroundColor: "black",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingBottom: 16,
		paddingTop: 64,
	},
	instaCloneAppLogo: {
		marginLeft: 8,
		height: 30,
		width: 200,
	},
	arrowDown: {
		marginLeft: 8,
		marginTop: 12,
		height: 10,
		width: "5%",
	},
	logoAndArrowDownWrapper: {
		backgroundColor: "black",
		flexDirection: "row",
	},
	actionRightIconsWrapper: {
		backgroundColor: "black",
		flexDirection: "row",
	},
	plusIcon: {
		marginLeft: 8,
		height: 32,
		width: 32,
	},
	heartTopIcon: {
		marginLeft: 8,
		height: 32,
		width: 36,
	},
	sendTopIcon: {
		marginLeft: 8,
		marginRight: 8,
		height: 32,
		width: 34,
	},
});
