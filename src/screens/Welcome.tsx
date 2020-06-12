import React, {useLayoutEffect} from 'react';
import {StyleSheet} from 'react-native';
import WelcomeCarousel from '../components/WelcomeCarousel';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../router/Navigation';
import {CommonActions} from '@react-navigation/native';
import Typography from '../components/Typography';
import {Button} from 'react-native-paper';
import ScrollableContent from '../components/Content';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Welcome'>;
};

const reset = {
  index: 0,
  routes: [{name: 'Home'}],
};

const Welcome: React.FC<Props> = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
    });
  });

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleLogIn = () => {
    navigation.navigate('SignIn');
  };

  const handleSkip = () => {
    navigation.dispatch(CommonActions.reset(reset));
  };

  return (
    <ScrollableContent style={styles.content}>
      <WelcomeCarousel />
      <Button mode="contained" style={styles.button} onPress={handleSignUp}>
        <Typography>Sign up</Typography>
      </Button>
      <Button mode="outlined" style={styles.button} onPress={handleLogIn}>
        <Typography>Log in</Typography>
      </Button>
      <Button style={styles.button} onPress={handleSkip}>
        <Typography>Skip for now</Typography>
      </Button>
    </ScrollableContent>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  button: {
    marginBottom: 7.5,
    justifyContent: 'center',
  },
});

export default Welcome;
