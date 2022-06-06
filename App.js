import { Photos } from "./src/screens/photos";
import { MainHeader } from "./src/components/mainHeader";
import { SearchPhotos } from "./src/screens/searchPhotos";
import { QueryClientProvider, QueryClient } from "react-query";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const queryClient = new QueryClient();
const Tab = createBottomTabNavigator();

const Dashboard = () => <Photos />;
const Search = () => <SearchPhotos />;

const App = () => (
	<QueryClientProvider client={queryClient}>
		<MainHeader />
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Dashboard"
				screenOptions={{
					tabBarActiveTintColor: "white",
					tabBarStyle: {
						backgroundColor: "black",
					},
				}}
			>
				<Tab.Screen
					name="News Feed"
					component={Dashboard}
					options={{
						headerShown: false,
						tabBarIcon: ({ size, color }) => (
							<Icon name={"home"} color={color} size={size} />
						),
					}}
				/>
				<Tab.Screen
					name="Search"
					component={Search}
					options={{
						headerShown: false,
						tabBarIcon: ({ size, color }) => (
							<Icon name={"search"} color={color} size={size} />
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	</QueryClientProvider>
);
export default App;
