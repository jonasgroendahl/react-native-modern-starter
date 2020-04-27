import React from 'react';
import {Content, Text} from 'native-base';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {TabNavigationParamList} from '../router/TabNavigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../router/Navigation';

type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavigationParamList, 'Home'>,
  StackNavigationProp<RootStackParamList>
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Home: React.FC<Props> = () => {
  return (
    <Content>
      <Text>Hi</Text>
    </Content>
  );
};

export default Home;
