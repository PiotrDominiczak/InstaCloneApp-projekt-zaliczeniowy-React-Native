import { RenderItem } from "../../components/renderItem";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { useQuery } from "react-query";

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
	const { container, flatList } = styles;
	return (
		<View style={container}>
			{isError && <Text>Nastąpił błąd, spróbuj ponownie później</Text>}
			{isLoading && <Text>Trwa ładowanie zdjęć...</Text>}
			<FlatList
				style={flatList}
				data={photos}
				renderItem={({ item }) => <RenderItem item={item} />}
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
	flatList: { width: "100%" },
});
