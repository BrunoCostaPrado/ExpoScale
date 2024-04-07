import { Text, View } from "react-native"

import { baseURL } from "@/lib/api"

export default function Home() {
	return (
		<View className="flex-1 mt-40 text-center justify-center ">
			<Text>Open up App.tsx to start working on your app!</Text>
			<Text>{baseURL}</Text>
		</View>
	)
}
