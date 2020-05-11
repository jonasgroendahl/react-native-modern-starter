import React from 'react';
import {Content} from 'native-base';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {TabNavigationParamList} from '../router/TabNavigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../router/Navigation';
import Typography from '../components/Typography';

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
      <Typography variant="title">Hey</Typography>
      <Typography variant="subheader">Hey</Typography>
      <Typography>Hey</Typography>
    </Content>
  );
};

export default Home;
