import React from 'react';
import {
  Container,
  Input,
  Form,
  Item,
  Content,
  Button,
  Text,
  Icon,
} from 'native-base';
import {StyleSheet} from 'react-native';
import Or from '../components/Or';
import GoogleButton from '../components/GoogleButton';
import Typography from '../components/Typography';
import Center from '../components/Center';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../router/Navigation';
import {TextInputStyles} from '../styles/TextInputStyles';
import Spacer from '../components/Spacer';
import {CommonActions} from '@react-navigation/native';

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
    <Container>
      <Content padder>
        <Form>
          <Item regular style={TextInputStyles.input}>
            <Input placeholder="Full name" />
          </Item>
          <Item regular style={TextInputStyles.input}>
            <Input placeholder="Email" keyboardType="email-address" />
          </Item>
          <Item regular style={TextInputStyles.input}>
            <Input placeholder="Password" secureTextEntry={true} />
            <Icon active name="eye-off" type="Feather" />
          </Item>
          <Button full onPress={handleSignUp}>
            <Typography>Sign Up</Typography>
          </Button>
          <Or />
          <GoogleButton />
          <Spacer />
          <Typography variant="caption">
            By signing up you accept the Terms of Service and Privacy Policy.
          </Typography>
          <Center style={styles.center}>
            <Typography>Already have an account?</Typography>
            <Button transparent>
              <Typography>Log in</Typography>
            </Button>
          </Center>
        </Form>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  center: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SignUp;
