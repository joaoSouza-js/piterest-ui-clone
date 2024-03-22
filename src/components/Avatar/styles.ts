import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
        borderRadius: 999
    },
    selected: {
        borderWidth: 1,
        borderColor: theme.colors.white
    }
})