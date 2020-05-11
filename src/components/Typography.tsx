import React from 'react';
import {Text} from 'native-base';
import {StyleSheet, TextProps, Platform} from 'react-native';

export const baseFont =
  Platform.OS === 'ios' ? 'CeraPro-Light' : 'Cera-Pro-Light';

type TypographyVariant = 'caption' | 'p' | 'subheader' | 'title';

interface Props extends TextProps {
  variant?: TypographyVariant;
}

const Typography: React.FC<Props> = ({children, variant = 'p'}) => {
  return <Text style={[styles.root, styles[variant]]}>{children}</Text>;
};

const styles = StyleSheet.create({
  root: {
    fontFamily: baseFont,
  },
  caption: {
    fontSize: 12,
  },
  p: {
    fontSize: 15,
  },
  subheader: {
    fontSize: 22,
  },
  title: {
    fontSize: 25,
    fontFamily: Platform.OS === 'ios' ? 'CeraPro-Bold' : 'Cera-Pro-Bold',
  },
});

export default Typography;
