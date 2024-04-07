import "@/styles/global.css"

import { Slot } from "expo-router"

import { Loading } from "@/components/loading"

import {
	useFonts,
	JetBrainsMono_700Bold,
	JetBrainsMono_500Medium,
	JetBrainsMono_400Regular
} from "@expo-google-fonts/jetbrains-mono"

export default function Layout() {
	const [fontsLoaded] = useFonts({
		JetBrainsMono_700Bold,
		JetBrainsMono_500Medium,
		JetBrainsMono_400Regular
	})

	if (!fontsLoaded) {
		return <Loading />
	}

	return <Slot />
}
