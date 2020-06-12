import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import Typography from './Typography';
import Icon from 'react-native-vector-icons/AntDesign';

const GoogleButton: React.FC<any> = ({onPress}) => {
  return (
    <Button
      mode="contained"
      style={styles.btn}
      icon={() => <Icon name="google" size={20} />}
      onPress={onPress}>
      <Typography>Sign up with Google</Typography>
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
