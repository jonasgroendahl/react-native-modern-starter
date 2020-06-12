import React from 'react';
import {Text} from 'react-native-paper';
import {StyleSheet, TextProps} from 'react-native';
import Colors from '../utils/Colors';

//export const baseFont = Platform.OS === 'ios' ? 'Roboto' : 'Roboto';

type TypographyVariant = 'caption' | 'p' | 'subheader' | 'title';

interface Props extends TextProps {
  variant?: TypographyVariant;
  helper?: boolean;
}

const Typography: React.FC<Props> = ({
  children,
  variant = 'p',
  helper,
  ...rest
}) => {
  const textStyles = [styles.root, styles[variant]];

  if (helper) {
    textStyles.push(styles.helper);
  }

  return (
    <Text style={textStyles} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  root: {},
  caption: {
    fontSize: 12,
  },
  p: {
    fontSize: 14,
  },
  subheader: {
    fontSize: 22,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
  },
  helper: {
    color: Colors.helper,
  },
});

export default Typography;
