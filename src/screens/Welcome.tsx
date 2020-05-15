import React from 'react';
import {Container, Content, Button} from 'native-base';
import {StyleSheet} from 'react-native';
import WelcomeCarousel from '../components/WelcomeCarousel';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../router/Navigation';
import {CommonActions} from '@react-navigation/native';
import Typography from '../components/Typography';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Welcome'>;
};

const reset = {
  index: 0,
  routes: [{name: 'Home'}],
};

const Welcome: React.FC<Props> = ({navigation}) => {
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
    <Container>
      <Content padder contentContainerStyle={styles.content}>
        <WelcomeCarousel />
        <Button style={styles.button} onPress={handleSignUp}>
          <Typography>Sign up</Typography>
        </Button>
        <Button style={styles.button} bordered onPress={handleLogIn}>
          <Typography>Log in</Typography>
        </Button>
        <Button style={styles.button} transparent onPress={handleSkip}>
          <Typography>Skip for now</Typography>
        </Button>
      </Content>
    </Container>
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
