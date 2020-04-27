import React from 'react';
import {
  Content,
  Container,
  Form,
  Item,
  Input,
  Icon,
  Button,
  Text,
} from 'native-base';
import {TextInputStyles} from '../styles/TextInputStyles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../router/Navigation';
import {CommonActions} from '@react-navigation/native';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'SignIn'>;
};

const SignIn: React.FC<Props> = ({navigation}) => {
  const handleLogIn = () => {
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
          <Button full onPress={handleLogIn}>
            <Text>Log in</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
