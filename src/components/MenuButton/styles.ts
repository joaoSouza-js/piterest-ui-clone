import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  IconContainer: {
    height:  100,
    width: 100, 
    borderRadius: 12,
    backgroundColor: theme.colors.gray[700],
    justifyContent: 'center',
    alignItems: 'center',
  }
});