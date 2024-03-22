import { Image, ImageProps } from "react-native";
import { styles } from "./styles";

type AvatarProps = ImageProps & {
    selected?: boolean
}

export function Avatar({ style, selected = false, ...rest }: AvatarProps) {
    return (
        <Image
            {...rest}
            style={[styles.image, style, selected && styles.selected]}
        />
    )
}