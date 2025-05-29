import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{ tabBarActiveTintColor: "purple", tabBarShowLabel: true }}
		>
			<Tabs.Screen
				name="home/index"
				options={{
					title: "Inicio Tabs",
					tabBarIcon: ({ color }) => (
						<Ionicons size={28} name="home-outline" color={color} />
						// <FontAwesome size={28} name="home" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="favorites/index"
				options={{
					title: "favoritos Tabs",
					tabBarIcon: ({ color }) => (
						<Ionicons size={28} name="heart-outline" color={color} />
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
