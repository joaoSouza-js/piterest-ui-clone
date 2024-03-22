import React, { forwardRef, useCallback, useMemo, useRef } from 'react';
import { View } from 'react-native';
import { Text } from "@/components/Text"

import { styles } from './styles';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { Foundation, Ionicons, FontAwesome,FontAwesome6 ,MaterialIcons} from "@expo/vector-icons";
import { Heading } from '../Heading';
import { theme } from '@/theme';
import { MenuButton } from '../MenuButton';

type menuProps = {
    onClose: () => void
}

export const Menu = forwardRef<BottomSheet, menuProps>(({ onClose }, ref) => {


    return (
        <BottomSheet
            index={0}
            ref={ref}
            handleComponent={() => null}
            backgroundStyle={styles.container}
            snapPoints={[0.01, "30%"]}
        >
            <View style={styles.content} >
                <View style={styles.header}>
                    <FontAwesome
                        name="close"
                        color={theme.colors.white}
                        onPress={onClose}
                        size={28}
                    />
                    <View style={styles.titleContainer}>

                        <Heading style={styles.title}>
                            Começe  a criar agora
                        </Heading>

                    </View>
                    

                </View>
                <View style={styles.options}>
                    <MenuButton 
                        title='Pin'
                        Icon={<FontAwesome6 name="copy" size={48} color={theme.colors.white} />}
                    />
                      <MenuButton 
                        title='Colagem'
                        Icon={<MaterialIcons name="push-pin" size={48} color={theme.colors.white} />}
                    />
                      <MenuButton  
                        title='Pasta'
                        Icon={<MaterialIcons name="space-dashboard" size={48} color={theme.colors.white} />}
                    />
                   
                </View>
            </View>

        </BottomSheet>
    );
})

