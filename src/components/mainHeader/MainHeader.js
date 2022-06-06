import { StyleSheet, View } from "react-native";
import { Arrow } from "../../img/Arrow";
import { HeartIcon } from "../../img/Heart";
import { InstaCloneApp } from "../../img/InstaCloneApp";
import { PlusIcon } from "../../img/Plus";
import { SendIcon } from "../../img/SendIcon";

export const MainHeader = () => {
	const {
		header,
		logoAndArrowDownWrapper,
		actionRightIconsWrapper,
		arrowDown,
		heartIcon,
		sendIcon,
	} = styles;

	return (
		<View style={header}>
			<View style={logoAndArrowDownWrapper}>
				<InstaCloneApp />
				<Arrow style={arrowDown} />
			</View>
			<View style={actionRightIconsWrapper}>
				<PlusIcon />
				<HeartIcon style={heartIcon} />
				<SendIcon style={sendIcon} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		backgroundColor: "black",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingBottom: 16,
		paddingTop: 64,
	},
	logoAndArrowDownWrapper: {
		backgroundColor: "black",
		flexDirection: "row",
		padding: 8,
		maxHeight: 32,
	},
	actionRightIconsWrapper: {
		backgroundColor: "black",
		flexDirection: "row",
	},
	arrowDown: {
		marginTop: 12,
		marginLeft: 2,
	},
	heartIcon: {
		marginLeft: 8,
		width: 36,
		height: 32,
	},
	sendIcon: {
		width: 32,
		height: 32,
		marginLeft: 8,
		marginRight: 4,
	},
});
