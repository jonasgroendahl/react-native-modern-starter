import React from 'react';
import {Text} from 'native-base';
import {StyleSheet, TextProps} from 'react-native';

interface Props extends TextProps {
  variant: 'caption';
}

const Typography: React.FC<Props> = ({children, variant}) => {
  return <Text style={styles[variant]}>{children}</Text>;
};

const styles = StyleSheet.create({
  caption: {
    fontSize: 12,
  },
});

export default Typography;
