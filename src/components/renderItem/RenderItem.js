import { VisitCounter } from "../../components/visitCounter";
import { Comment } from "../../components/comment";
import { Logo } from "../../components/logo";
import { HeartIcon } from "../../img/Heart";
import { CommentIcon } from "../../img/Comment";
import { SendIcon } from "../../img/SendIcon";
import { LabelIcon } from "../../img/Label";
import { Text, View, StyleSheet, Image } from "react-native";
import { vw } from "react-native-expo-viewport-units";
import { Arrow } from "../../img/Arrow";

export const RenderItem = (props) => {
	const { item } = props;
	const {
		title,
		titleAndLogoWrapper,
		mainImg,
		buyNowWrapper,
		buyNow,
		actionIconsWrapper,
		actionLeftIconsWrapper,
		arrowDown,
		heartIcon,
		commentIcon,
		sendIcon,
		labelIcon,
		counter,
		comment,
	} = styles;
	return (
		<>
			<View style={titleAndLogoWrapper}>
				<Logo id={item.id} />
				<Text style={title}>
					{item.title.replace(
						item.title.substr(0, 1),
						item.title.substr(0, 1).toUpperCase()
					)}
				</Text>
			</View>

			<Image style={mainImg} source={{ uri: item.url }} />
			<View style={buyNowWrapper}>
				<Text style={buyNow}>Kup teraz</Text>
				<Arrow style={arrowDown} />
			</View>
			<View style={actionIconsWrapper}>
				<View style={actionLeftIconsWrapper}>
					<HeartIcon style={heartIcon} />
					<CommentIcon style={commentIcon} />
					<SendIcon style={sendIcon} />
				</View>
				<LabelIcon style={labelIcon} />
			</View>
			<Text style={counter}>
				<VisitCounter id={item.id} /> wyświetleń
			</Text>
			<Text style={comment}>
				<Comment id={item.id} />
			</Text>
		</>
	);
};

const styles = StyleSheet.create({
	title: {
		width: "80%",
		fontSize: 24,
		color: "#fff",
		opacity: 0.9,
	},

	titleAndLogoWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 24,
		marginBottom: 16,
		marginLeft: 8,
		marginRight: 8,
		alignItems: "center",
	},
	mainImg: { height: vw(100) },
	buyNowWrapper: {
		backgroundColor: "#DA486D",
		height: 64,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	buyNow: {
		color: "#fff",
		fontSize: 24,
		lineHeight: 64,
		marginLeft: 16,
	},

	actionIconsWrapper: {
		marginLeft: 8,
		marginTop: 8,
		marginBottom: 16,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	actionLeftIconsWrapper: {
		flexDirection: "row",
		alignItems: "center",
	},
	arrowDown: {
		transform: [{ rotate: "-90deg" }],
		marginRight: 16,
	},
	heartIcon: {
		width: 32,
		height: 24,
		marginRight: 8,
	},
	commentIcon: {
		marginRight: 8,
	},
	sendIcon: {
		height: 24,
		width: 24,
	},
	labelIcon: {
		marginRight: 8,
	},
	counter: {
		marginBottom: 8,
		marginLeft: 8,
		color: "white",
	},
	comment: {
		color: "white",
		marginLeft: 8,
		marginRight: 8,
		textAlign: "justify",
	},
});
