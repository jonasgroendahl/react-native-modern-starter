import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/AntDesign';
import Profile from '../screens/Profile';
import Colors from '../utils/Colors';

export type TabNavigationParamList = {
  Home: undefined;
  Profile: undefined;
};

type TabBarOptions = {
  focused: boolean;
  color: string;
  size: number;
};

const Tab = createBottomTabNavigator<TabNavigationParamList>();

const TabNavigation: React.FC = () => {
  const screenOptions = ({route}: any) => ({
    tabBarIcon: ({focused, color}: TabBarOptions) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home';
      } else if (route.name === 'Profile') {
        iconName = focused ? 'user' : 'user';
      } else {
        iconName = focused ? 'tags' : 'tags';
      }
      return <Icon name={iconName} color={color} type="AntDesign" />;
    },
  });

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBarOptions={{
        activeTintColor: Colors.brandPrimary,
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
