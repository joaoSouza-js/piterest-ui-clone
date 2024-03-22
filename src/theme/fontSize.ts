export const fontSize = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20
} as const 

export type FONT_SIZE =  keyof typeof  fontSize