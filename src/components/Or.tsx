import React from 'react';
import {Divider} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import Typography from './Typography';

const Or: React.FC = () => {
  return (
    <View style={styles.or}>
      <Divider style={styles.divider} />
      <Typography style={styles.text}>Or</Typography>
      <Divider style={styles.divider} />
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
  divider: {
    flex: 1,
  },
});
export default Or;
