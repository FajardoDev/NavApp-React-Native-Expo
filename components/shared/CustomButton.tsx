/* eslint-disable react/display-name */
import React from "react";
import { Pressable, PressableProps, Text, View } from "react-native";
// import Animated, {
// 	useAnimatedStyle,
// 	useSharedValue,
// 	withTiming,
// } from "react-native-reanimated";

interface Props extends PressableProps {
	children: string;
	color?: "primary" | "secondary" | "tertiary";
	variant?: "contained" | "Text-only";
	className?: string;
}

const CustomButton = React.forwardRef(
	(
		{
			children,
			color = "primary",
			onPress,
			onLongPress,
			variant = "contained",
			className,
		}: Props,
		ref: React.Ref<View>,
	) => {
		const btnColor = {
			primary: "bg-primary",
			secondary: "bg-secondary",
			tertiary: "bg-tertiary",
		}[color];

		const textColor = {
			primary: "text-primary",
			secondary: "text-secondary",
			tertiary: "text-tertiary",
		}[color];

		// Aquí van las fn para las animaciones

		if (variant === "Text-only") {
			return (
				<Pressable
					onPress={onPress} // Aquí va tu función si el botón hace algo al ser presionado
					onLongPress={onLongPress}
					ref={ref}
					className={`p-3 ${className}`}
				>
					<Text className={`text-center text-2xl ${textColor} font-work-medium`}>
						{children}
					</Text>
				</Pressable>
			);
		}

		return (
			// <Animated.View style={animatedStyle}>
			<Pressable
				onPress={onPress} // Aquí va tu función si el botón hace algo al ser presionado
				onLongPress={onLongPress}
				// onPressIn={handlePressIn} // Dispara la animación de presionar
				// onPressOut={handlePressOut} // Dispara la animación de soltar
				ref={ref}
				className={`p-3 rounded-md ${btnColor}  active:opacity-90 ${className}`}
			>
				<Text className="text-white text-center text-2xl font-work-medium ">
					{children}
				</Text>
			</Pressable>
			// </Animated.View>
		);
	},
);

export default CustomButton;

/*
        		const opacity = useSharedValue(1);

		const animatedStyle = useAnimatedStyle(() => {
			return {
				opacity: opacity.value,
			};
		});

		// Cuando el usuario presiona el botón, baja la opacidad suavemente
		const handlePressIn = () =>
			(opacity.value = withTiming(0.7, { duration: 200 }));

		// Cuando el usuario suelta el botón, la opidez vuelve a la normalidad suavemente
		const handlePressOut = () =>
			(opacity.value = withTiming(1, { duration: 200 })); // opacity.value = withSpring(1);
        * */
