import { theme } from "@/theme";
import { StyleSheet, Text, View } from "react-native";

export default function Profile(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                 say hi to react native
            </Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.gray[800],
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontFamily: theme.fontFamily.bold,
        color: theme.colors.white,
        
    }
})