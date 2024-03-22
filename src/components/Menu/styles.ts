import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[800],
  },
  header: {
    
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  options: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 24,
    justifyContent: 'center',

  },

  titleContainer: {
    flex: 1,
    alignItems: "center",
    marginRight: 28,
  },
  
  title: {

   
    color: "red"
  }
});