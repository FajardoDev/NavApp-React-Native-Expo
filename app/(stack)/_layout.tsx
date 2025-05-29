import { Stack } from "expo-router";
import React from "react";

const StackLayout = () => {
	return (
		<Stack
			screenOptions={{
				// headerShown: false,
				headerShadowVisible: false,
				contentStyle: {
					backgroundColor: "white",
				},
				animation: "fade_from_bottom",
			}}
		>
			<Stack.Screen
				name="home/index"
				options={{
					title: "Inicio",
				}}
			/>

			<Stack.Screen
				name="products/index"
				options={{
					title: "Productos",
				}}
			/>
			<Stack.Screen
				name="profile/index"
				options={{
					title: "Perfil",
				}}
			/>
			<Stack.Screen
				name="settings/index"
				options={{
					title: "Ajustes",
				}}
			/>
		</Stack>
	);
};

export default StackLayout;

{
	/* <Stack.Screen
				name="home/index"
				options={{
					title: "Inicio",
					headerShown: true,
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: "#a78bfa",
						//   shadowColor: "transparent", // Quitar sombra en iOS
						//   elevation: 0, // Quitar sombra en Android
					},
					headerTitleStyle: {
						fontSize: 20,
						fontWeight: "600",
						color: "white",
					},
					animation: "fade_from_bottom", // Animación de transición
					gestureEnabled: true, // Habilitar gesto para volver
					presentation: "card", // Modo presentación estilo tarjeta
				}}
			/> */
}

{
	/* <Stack.Screen
				name="products/index"
				options={{
					title: "Productos",
					headerShown: true,
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: "#a78bfa",
						//   shadowColor: "transparent", // Quitar sombra en iOS
						//   elevation: 0, // Quitar sombra en Android
					},
					headerTitleStyle: {
						fontSize: 20,
						fontWeight: "600",
						color: "white",
					},
					animation: "fade_from_bottom", // Animación de transición
					gestureEnabled: true, // Habilitar gesto para volver
					presentation: "card", // Modo presentación estilo tarjeta
				}}
			/>

			<Stack.Screen
				name="profile/index"
				options={{
					title: "Perfil",
					headerShown: true,
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: "#a78bfa",
						//   shadowColor: "transparent", // Quitar sombra en iOS
						//   elevation: 0, // Quitar sombra en Android
					},
					headerTitleStyle: {
						fontSize: 20,
						fontWeight: "600",
						color: "white",
					},
					animation: "fade_from_bottom", // Animación de transición
					gestureEnabled: true, // Habilitar gesto para volver
					presentation: "card", // Modo presentación estilo tarjeta
				}}
			/>

			<Stack.Screen
				name="settings/index"
				options={{
					title: "Ajustes",
					headerShown: true,
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: "#a78bfa",
						//   shadowColor: "transparent", // Quitar sombra en iOS
						//   elevation: 0, // Quitar sombra en Android
					},
					headerTitleStyle: {
						fontSize: 20,
						fontWeight: "600",
						color: "white",
					},
					animation: "fade_from_bottom", // Animación de transición
					gestureEnabled: true, // Habilitar gesto para volver
					presentation: "card", // Modo presentación estilo tarjeta
				}}
			/> */
}
