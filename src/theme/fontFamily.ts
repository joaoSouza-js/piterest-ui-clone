export const fontFamily = {
    regular: "Roboto_400Regular",
    medium : "Roboto_500Medium",
    bold: "Roboto_700Bold"
} as const

export type FONT_FAMILY =  keyof typeof  fontFamily