import {Slot, SplashScreen} from "expo-router"
import {useFonts} from "expo-font"
import {GestureHandlerRootView} from "react-native-gesture-handler"
import {
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
} from "@expo-google-fonts/roboto"
import { StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar"
import * as SlashScreen from "expo-splash-screen"
import { theme } from "@/theme"
import { useSafeAreaInsets } from "react-native-safe-area-context"

SplashScreen.preventAutoHideAsync()

export default function layout(){
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    const safeInsets = useSafeAreaInsets()

    if(fontsLoaded === true){
        SlashScreen.hideAsync()
    }

    return (
        <GestureHandlerRootView style={[styles.container, {paddingTop: safeInsets.top + 16}]}>
            <StatusBar
                backgroundColor="transparent"
                translucent
                style="light"
            />
            {
                fontsLoaded && (
                    <Slot/>
                )
            }

        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: theme.colors.black
    }
})            