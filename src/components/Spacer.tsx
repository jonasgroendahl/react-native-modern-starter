import React from 'react';
import {View, StyleSheet} from 'react-native';

type Props = {
  variant?: 1 | 2 | 3;
};

const Spacer: React.FC<Props> = ({variant = 1}) => {
  return <View style={styles[variant]} />;
};

const styles = StyleSheet.create({
  1: {
    height: 5,
  },
  2: {
    height: 10,
  },
  3: {
    height: 15,
  },
});

export default Spacer;
