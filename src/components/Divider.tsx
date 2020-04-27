import React from 'react';
import {View, StyleSheet} from 'react-native';

const Divider: React.FC = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    flex: 1,
    height: 1.5,
    backgroundColor: '#eee',
  },
});

export default Divider;
