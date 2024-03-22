import { Tabs } from "expo-router";
import { Foundation, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { theme } from "@/theme";
import { Avatar } from "@/components/Avatar";
import { StyleSheet, View } from "react-native";
import { Menu } from "@/components/Menu";
import { useRef } from "react";
import BottomSheet from '@gorhom/bottom-sheet'


const iconSize = 30

export default function TabLayout() {
    const bottomSheetRef = useRef<BottomSheet>(null);
    function handleOpenBottomSheetMenu(){
        bottomSheetRef.current?.expand()
    }
    function closeBottomSheetMenu(){
        bottomSheetRef.current?.close()
    }

    return (
        <View style={styles.container}>

            <Tabs
                screenOptions={{
                    headerShown: false,

                    tabBarActiveTintColor: theme.colors.white,
                    tabBarInactiveTintColor: theme.colors.gray[600],
                    tabBarShowLabel: false,

                    tabBarStyle: {

                        backgroundColor: theme.colors.black,
                        borderColor: theme.colors.gray[800],
                    }
                }}
            >

                <Tabs.Screen
                    name="index"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Foundation size={iconSize} name="home" color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="search"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons size={iconSize} name="search" color={color} />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="menu"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome5 size={iconSize} name="plus" color={color} />
                        ),
                    }}
                    listeners={() => ({
                        tabPress: (event) => {
                            event.preventDefault();
                            handleOpenBottomSheetMenu()
                        }
                    })}

                />
                <Tabs.Screen
                    name="messages"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons size={iconSize} name="chatbubble-ellipses" color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <Avatar
                                style={{
                                    width: iconSize,
                                    height: iconSize,
                                }}
                                selected={focused}
                                source={{
                                    uri: "https://avatars.githubusercontent.com/u/84108989?v=4"
                                }}
                            />
                        ),
                    }}
                />
            </Tabs>
            <Menu ref={bottomSheetRef} onClose={closeBottomSheetMenu}/>
        </View>




    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

