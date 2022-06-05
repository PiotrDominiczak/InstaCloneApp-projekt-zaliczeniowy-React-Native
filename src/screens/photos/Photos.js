import { VisitCounter } from "../../components/visitCounter";
import { Comment } from "../../components/comment";
import { Logo } from "../../components/logo";
import { Text, View, FlatList, StyleSheet, Image } from "react-native";
import { useQuery } from "react-query";
import { vw } from "react-native-expo-viewport-units";

export async function getPhotos() {
	const response = await fetch("https://jsonplaceholder.typicode.com/photos");
	return response.json();
}

export const Photos = () => {
	const {
		data: photos,
		isError,
		isLoading,
	} = useQuery("getPhotos", getPhotos, {
		placeholderData: [],
	});
	return (
		<View style={styles.container}>
			{isError && <Text>Nastąpił błąd, spróbuj ponownie później</Text>}
			{isLoading && <Text>Trwa ładowanie zdjęć...</Text>}
			<FlatList
				style={styles.flatList}
				data={photos}
				renderItem={({ item }) => (
					<>
						<View style={styles.titleAndLogoWrapper}>
							<Logo id={item.id} />
							<Text style={styles.title}>
								{item.title.replace(
									item.title.substr(0, 1),
									item.title.substr(0, 1).toUpperCase()
								)}
							</Text>
						</View>

						<Image
							style={styles.mainImg}
							source={{ uri: item.url }}
						/>
						<View style={styles.buyNowWrapper}>
							<Text style={styles.buyNow}>Kup teraz</Text>
							<Image
								style={styles.buyNowArrow}
								source={require("../../img/arrowRight.png")}
							/>
						</View>
						<View style={styles.actionIconsWrapper}>
							<View style={styles.actionLeftIconsWrapper}>
								<Image
									style={styles.heartIcon}
									source={require("../../img/heartTop.png")}
								/>
								<Image
									style={styles.commentIcon}
									source={require("../../img/comment.png")}
								/>
								<Image
									style={styles.sendIcon}
									source={require("../../img/sendTop.png")}
								/>
							</View>

							<Image
								style={styles.labelIcon}
								source={require("../../img/label.png")}
							/>
						</View>
						<Text style={styles.counter}>
							<VisitCounter id={item.id} /> wyświetleń
						</Text>
						<Text style={styles.comment}>
							<Comment id={item.id} />
						</Text>
					</>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		width: "80%",
		fontSize: 24,
		color: "#fff",
		opacity: 0.9,
	},
	flatList: { width: "100%" },
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
	buyNowArrow: {
		height: 16,
		width: 10,
		marginRight: 16,
	},
	actionIconsWrapper: {
		marginTop: 16,
		marginBottom: 16,
		marginLeft: 8,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	actionLeftIconsWrapper: {
		flexDirection: "row",
		alignItems: "center",
	},
	heartIcon: {
		marginRight: 12,
		height: 24,
		width: 26,
	},
	commentIcon: {
		marginRight: 12,
		height: 24,
		width: 26,
	},
	sendIcon: {
		height: 24,
		width: 24,
	},
	labelIcon: {
		marginRight: 8,
		height: 24,
		width: 16,
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
