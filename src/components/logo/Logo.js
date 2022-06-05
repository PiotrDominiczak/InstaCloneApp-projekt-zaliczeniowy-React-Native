import { Image } from "react-native";
import { StyleSheet } from "react-native";

export const Logo = (props) => {
	const logoUrls = [
		require(`../../img/logos/01.png`),
		require(`../../img/logos/02.png`),
		require(`../../img/logos/03.png`),
		require(`../../img/logos/04.png`),
		require(`../../img/logos/05.png`),
	];

	return <Image style={styles.logo} source={logoUrls[props.id % 5]} />;
};

const styles = StyleSheet.create({
	logo: {
		height: 64,
		width: 64,
		borderRadius: 50,
	},
});
