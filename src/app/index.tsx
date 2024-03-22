import { theme } from "@/theme";
import {  View, useWindowDimensions } from "react-native";
import Logo from "@/assets/logo.png"
import Animated, { SlideInDown, runOnJS, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect } from "react";

import { Skeleton } from "moti/skeleton";
import { router } from "expo-router";

export default function Splash() {
    const insets = useSafeAreaInsets()
    const logoScale = useSharedValue(1)
    const logoPositionY = useSharedValue(0)
    const contentSkeletonDisplay = useSharedValue(0)
    const dimension = useWindowDimensions()
    const screenHeight = dimension.height
    const skeletonColors = [
        theme.colors.gray[600],
        theme.colors.gray[700],
        theme.colors.gray[600],
    ]


    const logoAnimatedStyle = useAnimatedStyle(() => ({
        transform: [
            { scale: logoScale.value },
            { translateY: logoPositionY.value }
        ]
    }))

    const contentSkeletonDisplayStyle = useAnimatedStyle(() => ({
        display: contentSkeletonDisplay.value === 1 ? "flex" : "none"
    }))


    function logoAnimation() {
        logoScale.value = withSequence(
            withTiming(.7),
            withTiming(1.3),
            withTiming(1, undefined, (finished) => {
                if (finished) {
                    logoPositionY.value = withSequence(
                        withTiming((80) - insets.bottom - 24, undefined, () => {
                            contentSkeletonDisplay.value = 1

                        }),
                        withTiming(-screenHeight, { duration: 600 }, (isFinished) => {
                            if (isFinished) {
                                
                                
                                runOnJS(onEndSplash)()
                            }
                        })
                    )


                }
            })
        )

    }

    function onEndSplash() {
        router.push("/(tabs)")

    }

    function filters() {
        const filterArray = Array.from({ length: 10 }, (_, index) => index + 1)
        return filterArray.map(value => (
            <Skeleton
                width={60}
                key={String(value)}
                height={26}
                colors={skeletonColors}
            />
        ))
    }

    function boxes(column: "left" | "right") {
        const isEven = column === "right"
        const array = Array.from({ length: 10 }, (_, index) => index + 1)

        return array.map((_, index) => (
            <Animated.View

                key={String(index)}
                style={
                    [
                        styles.box,
                        {
                            height: boxHeight(isEven ? index : index + 1),
                        }
                    ]}
            >
                <Skeleton
                    colors={skeletonColors}
                    height={boxHeight(isEven ? index : index + 1)}
                    width={"100%"}
                />
            </Animated.View>
        ))





    }

    function boxHeight(number: number) {
        const isEven = number % 2 === 0

        if (isEven) {
            return 200
        } else {
            return 300
        }
    }

    useEffect(() => {
        logoAnimation()
    }, [])

    return (
        <View style={[styles.container]}>
            <Animated.Image source={Logo} style={[styles.image, logoAnimatedStyle]} />

            <Animated.View style={[styles.content, contentSkeletonDisplayStyle]} entering={SlideInDown.duration(700)}>
                <View style={styles.filters}>
                    {filters()}
                </View>
                <View style={styles.boxes}>
                    <View style={styles.column}>
                        {boxes("left")}

                    </View>

                    <View style={styles.column}>
                        {boxes("right")}

                    </View>
                </View>

            </Animated.View>
        </View>
    )
}



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 12,
        justifyContent: 'center',
        backgroundColor: theme.colors.black,
    },
    image: {

        width: 70,
        height: 70,
    },

    content: {
        flex: 1,
        width: "100%",
        marginTop: -70,

    },
    box: {
        width: "100%",
        backgroundColor: theme.colors.gray[600],
        borderRadius: 16,
    },
    boxes: {
        gap: 8,

        flex: 1,
        width: "100%",

        flexDirection: "row",
    },
    column: {
        gap: 8,
        flex: 1,
    },
    filters: {
        flexDirection: "row",
        overflow: "hidden",
        gap: 8,
        width: "100%",
        paddingVertical: 12,
    }
});