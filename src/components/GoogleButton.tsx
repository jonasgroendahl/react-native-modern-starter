import React from 'react';
import {Button, Text, Icon, View} from 'native-base';
import {StyleSheet} from 'react-native';

const GoogleButton: React.FC<any> = ({onPress}) => {
  return (
    <Button style={styles.btn} onPress={onPress}>
      <Icon name="google" type="AntDesign" />
      <Text>Sign up with Google</Text>
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
