import React from 'react';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {TabNavigationParamList} from '../router/TabNavigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../router/Navigation';
import Typography from '../components/Typography';
import Spacer from '../components/Spacer';
import {Button} from 'react-native-paper';
import ScrollableContent from '../components/Content';

type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavigationParamList, 'Home'>,
  StackNavigationProp<RootStackParamList>
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <ScrollableContent>
      <Typography variant="title">React native modern template</Typography>
      <Typography variant="subheader">saves</Typography>
      <Typography>a lot of time.</Typography>
      <Button mode="outlined" onPress={() => navigation.navigate('Welcome')}>
        <Typography>Go to welcome</Typography>
      </Button>
      <Spacer />
    </ScrollableContent>
  );
};

export default Home;
