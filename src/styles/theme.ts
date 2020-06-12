import {DefaultTheme} from 'react-native-paper';
import Colors from '../utils/Colors';

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.brandPrimary,
    accent: '#f1c40f',
  },
};
