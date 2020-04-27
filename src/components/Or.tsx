import React from 'react';
import Divider from './Divider';
import {Text, View} from 'native-base';
import {StyleSheet} from 'react-native';

const Or: React.FC = () => {
  return (
    <View style={styles.or}>
      <Divider />
      <Text style={styles.text}>or</Text>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  or: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  text: {
    marginHorizontal: 10,
  },
});
export default Or;
