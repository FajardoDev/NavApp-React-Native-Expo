import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import "./global.css";

// import * as NavigationBar from "expo-navigation-bar";

// // Si está en Android

// const isAndroid = Platform.OS === "android";

// if (isAndroid) {
// 	NavigationBar.setBackgroundColorAsync("black");
// }

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const [fontsLoaded, error] = useFonts({
		"WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
		"WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
		"WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
	});

	useEffect(() => {
		if (error) throw error;
		if (fontsLoaded) SplashScreen.hideAsync();
	}, [fontsLoaded, error]);

	if (!fontsLoaded && !error) return null;

	return <Slot />;
	// return <Stack />;
};

export default RootLayout;
