import React, { ReactNode } from 'react';
import { Pressable, PressableProps, View } from 'react-native';
import { Text } from "@/components/Text"
import { styles } from './styles';

type FilterProps = PressableProps & {
    isSelected?: boolean,
    children: ReactNode

}
export function Filter({ isSelected = true, style, children, ...rest }: FilterProps) {
    return (
        <Pressable
            style={[styles.pressable]}
            {...rest}
        >
            <Text  >
                {children}
            </Text>

            <View
                style={[styles.pressable_footer, isSelected && styles.pressable_footer_selected]}
            />



        </Pressable>
    );
}