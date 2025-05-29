import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

const HomePantalla = () => {
	// Navigations

	return (
		<SafeAreaView>
			<View className="py-10 px-5">
				<CustomButton
					className="mb-2"
					color="primary"
					onPress={() => router.push("./products")}
				>
					Productos
				</CustomButton>

				<CustomButton
					className="mb-2"
					color="secondary"
					onPress={() => router.push("./profile")}
				>
					Perfil
				</CustomButton>

				<CustomButton
					className="mb-2"
					color="tertiary"
					onPress={() => router.push("./settings")}
				>
					Ajustes
				</CustomButton>

				<Link href="./products" asChild>
					<CustomButton className="mb-5" color="primary" variant="Text-only">
						Productos
					</CustomButton>
				</Link>

				{/* <Link
					href="/products"
					className="text-3xl bg-slate-500 p-2 rounded-md text-center text-primary mb-4"
				>
					Productos
				</Link>
				<Link
					href="/profile"
					className="text-3xl bg-slate-500 p-2 rounded-md text-center text-primary mb-4"
				>
					Perfil
				</Link>
				<Link
					href="/settings"
					className="text-3xl bg-slate-500 p-2 rounded-md text-center text-primary mb-4"
				>
					Ajustes
				</Link> */}
			</View>
		</SafeAreaView>
	);
};

export default HomePantalla;
