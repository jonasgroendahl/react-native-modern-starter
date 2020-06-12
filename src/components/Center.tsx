import React from 'react';
import {StyleSheet, ViewProps, View} from 'react-native';

const Center: React.FC<ViewProps> = ({children, style}) => (
  <View style={[styles.center, style]}>{children}</View>
);

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
  },
});

export default Center;
