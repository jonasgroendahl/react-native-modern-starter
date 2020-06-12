import React from 'react';
import {StyleSheet, View} from 'react-native';
import Or from '../components/Or';
import GoogleButton from '../components/GoogleButton';
import Typography from '../components/Typography';
import Center from '../components/Center';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../router/Navigation';
import Spacer from '../components/Spacer';
import {CommonActions} from '@react-navigation/native';
import {Button, TextInput} from 'react-native-paper';
import ScrollableContent from '../components/Content';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'SignUp'>;
};

const SignUp: React.FC<Props> = ({navigation}) => {
  const handleSignUp = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Home'}],
      }),
    );
  };

  return (
    <ScrollableContent>
      <View>
        <TextInput placeholder="Email" keyboardType="email-address" />
        <TextInput placeholder="Password" secureTextEntry={true} />
        <Button mode="contained" onPress={handleSignUp}>
          <Typography>Sign up</Typography>
        </Button>
      </View>
      <Or />
      <GoogleButton />
      <Spacer />
      <Typography variant="caption">
        By signing up you accept the Terms of Service and Privacy Policy.
      </Typography>
      <Center style={styles.center}>
        <Typography>Already have an account?</Typography>
        <Button>
          <Typography>Log in</Typography>
        </Button>
      </Center>
    </ScrollableContent>
  );
};

const styles = StyleSheet.create({
  center: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SignUp;
