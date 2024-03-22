import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  pressable: {
    alignItems: 'center',

  },
  pressable_footer: {
    height: 3,
    borderRadius: 5,
    marginTop: 2,
    width: "100%"
  },
  pressable_footer_selected: {
    backgroundColor: theme.colors.white,
  }
  
});