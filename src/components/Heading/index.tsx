import {
    Text as ReactNativeText,
    TextProps as ReactNativeTextProps,
} from "react-native";

import { styles } from "./styles";
import { theme } from "@/theme";

import { FONT_SIZE } from "@/theme/fontSize";
import { FONT_FAMILY } from "@/theme/fontFamily";

type TextProps = ReactNativeTextProps & {
    fontSize?: FONT_SIZE;
    fontFamily?: FONT_FAMILY
};

export function Heading({ fontSize = "lg", style, fontFamily="bold", ...rest }: TextProps) {
    return (
        <ReactNativeText
            style={[
                styles.text,
                { fontSize: theme.fontSize[fontSize], fontFamily: theme.fontFamily[fontFamily] },
            ]}
            {...rest}
        />
    );
}
