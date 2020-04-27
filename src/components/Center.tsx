import React from 'react';
import {View} from 'native-base';
import {StyleSheet, ViewProps} from 'react-native';

const Center: React.FC<ViewProps> = ({children, style}) => (
  <View style={[styles.center, style]}>{children}</View>
);

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
  },
});

export default Center;
