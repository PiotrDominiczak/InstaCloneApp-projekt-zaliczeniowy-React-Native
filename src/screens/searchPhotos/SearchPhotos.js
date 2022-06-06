import { getPhotos } from "../photos";
import { Text, View, FlatList, StyleSheet, TextInput } from "react-native";
import { useQuery } from "react-query";
import { vw } from "react-native-expo-viewport-units";
import ZoomImage from "react-native-zoom-image";
import { Easing } from "react-native";
import { useState } from "react";

export function SearchPhotos() {
	const {
		data: photos,
		isError,
		isLoading,
	} = useQuery("getPhotos", getPhotos, {
		placeholderData: [],
	});
	const [highlighted, setHighlighted] = useState(false);
	const { container, input, inputHighlight, smallImg } = styles;
	return (
		<View style={container}>
			{isError && <Text>Nastąpił błąd, spróbuj ponownie później</Text>}
			{isLoading && <Text>Trwa ładowanie zdjęć...</Text>}

			<TextInput
				style={[input, highlighted ? inputHighlight : {}]}
				keyboardAppearance={"dark"}
				placeholderTextColor={"#777"}
				placeholder={highlighted ? "" : "Search..."}
				onBlur={() => {
					setHighlighted(false);
				}}
				onFocus={() => {
					setHighlighted(true);
				}}
			/>

			<FlatList
				numColumns={3}
				data={photos}
				renderItem={({ item }) => (
					<ZoomImage
						source={{ uri: item.url }}
						imgStyle={smallImg}
						duration={200}
						enableScaling={false}
						easingFunc={Easing.ease}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		color: "white",
		backgroundColor: "black",
		borderColor: "white",
		borderRadius: 10,
		fontSize: 24,
		height: 50,
		width: "100%",
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	smallImg: {
		width: vw(33),
		height: vw(33),
	},
	inputHighlight: {
		borderColor: "#DA486D",
	},
});
