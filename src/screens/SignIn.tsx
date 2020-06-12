import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../router/Navigation';
import {CommonActions} from '@react-navigation/native';
import Typography from '../components/Typography';
import {TextInput, Button} from 'react-native-paper';
import ScrollableContent from '../components/Content';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'SignIn'>;
};

const reset = CommonActions.reset({
  index: 0,
  routes: [{name: 'Home'}],
});

const SignIn: React.FC<Props> = ({navigation}) => {
  const handleLogIn = () => {
    navigation.dispatch(reset);
  };

  return (
    <ScrollableContent>
      <TextInput placeholder="Email" keyboardType="email-address" />
      <TextInput placeholder="Password" secureTextEntry={true} />
      <Button mode="contained" onPress={handleLogIn}>
        <Typography>Log in</Typography>
      </Button>
    </ScrollableContent>
  );
};

export default SignIn;
