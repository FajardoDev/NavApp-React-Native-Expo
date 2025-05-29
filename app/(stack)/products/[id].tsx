import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const DetailsProducts = () => {
	const { id } = useLocalSearchParams();

	// console.log({ params });

	const product = products.find((p) => p.id === id);

	if (!product) return <Redirect href="/" />;

	return (
		<View className="mt-10 mx-5">
			<Text className="text-2xl font-work-black text-indigo-500 mb-2">
				{product.title}
			</Text>
			<Text className="text-xl font-work-medium text-slate-600 text-justify">
				{product.description}
			</Text>

			<View className="flex flex-row justify-between">
				<Text className="text-xl mt-2 font-work-black text-slate-600">
					RD${product.price}
				</Text>
			</View>
		</View>
	);
};

export default DetailsProducts;
