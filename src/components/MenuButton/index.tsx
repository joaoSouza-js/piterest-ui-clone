import React from 'react';
import { Pressable, PressableProps, View } from 'react-native';

import { styles } from './styles';
import { Text } from '../Text';

type  MenuButtonProps = PressableProps & {
    Icon: React.ReactNode,
    title: string
}
export function MenuButton({Icon,title,...rest}: MenuButtonProps) {
  return (
    <Pressable style={styles.container} {...rest}>
        <View style={styles.IconContainer}>
            {Icon}
        </View>
        <Text style={{marginTop: 8}}>
            {title} 
        </Text>
    

    </Pressable>
  );
}