import React from 'react';
import {Button, Icon, View} from 'native-base';
import {StyleSheet} from 'react-native';
import Typography from './Typography';

const GoogleButton: React.FC<any> = ({onPress}) => {
  return (
    <Button style={styles.btn} onPress={onPress}>
      <Icon name="google" type="AntDesign" />
      <Typography>Sign up with Google</Typography>
      <View style={styles.filler} />
    </Button>
  );
};

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'space-between',
  },
  filler: {
    width: 50,
  },
});

export default GoogleButton;
