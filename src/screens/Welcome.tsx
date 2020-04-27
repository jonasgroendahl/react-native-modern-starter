import React from 'react';
import {Container, Content, Button, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import WelcomeCarousel from '../components/WelcomeCarousel';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../router/Navigation';
import {CommonActions} from '@react-navigation/native';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Welcome'>;
};

const Welcome: React.FC<Props> = ({navigation}) => {
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleLogIn = () => {
    navigation.navigate('SignIn');
  };

  const handleSkip = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Home'}],
      }),
    );
  };

  return (
    <Container>
      <Content padder contentContainerStyle={styles.content}>
        <WelcomeCarousel />
        <Button style={styles.button} onPress={handleSignUp}>
          <Text>Sign up</Text>
        </Button>
        <Button style={styles.button} bordered onPress={handleLogIn}>
          <Text>Log in</Text>
        </Button>
        <Button style={styles.button} transparent onPress={handleSkip}>
          <Text>Skip for now</Text>
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
