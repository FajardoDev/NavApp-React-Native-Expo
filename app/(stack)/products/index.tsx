import { products } from "@/store/products.store";
import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";

const PantallaProductos = () => {
	return (
		<View className="flex flex-1 px-4">
			<FlatList
				data={products}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<View className="mt-10">
						<Text className="text-2xl font-work-black text-indigo-500 mb-2">
							{item.title}
						</Text>
						<Text className="text-xl font-work-medium text-slate-600 text-justify">
							{item.description}
						</Text>

						<View className="flex flex-row justify-between">
							<Text className="text-xl mt-2 font-work-black text-slate-600">
								RD${item.price}
							</Text>

							<Link
								href={`/(stack)/products/${item.id}`}
								className="mt-2 font-work-medium text-slate-800 text-xl bg-indigo-600/20 py-1 px-5 rounded-md active:opacity-85"
							>
								Ver detalles
							</Link>
						</View>
					</View>
				)}
			/>
		</View>
	);
};

export default PantallaProductos;
