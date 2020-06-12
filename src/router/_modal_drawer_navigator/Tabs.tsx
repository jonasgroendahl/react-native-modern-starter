import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Welcome from '../../screens/Welcome';
import SignUp from '../../screens/SignUp';
import SignIn from '../../screens/SignIn';
import Colors from '../../utils/Colors';
import Icon from 'react-native-vector-icons/AntDesign';

type TabProps = {
  Home: undefined;
  Profile: undefined;
};

type StackProps = {
  Welcome: undefined;
  SignUp: undefined;
  SignIn: undefined;
  Home: undefined;
};

const Tabs = createBottomTabNavigator<TabProps>();
const StackNavigator = createStackNavigator<StackProps>();

export const MainStack = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerTitleStyle: {},
      }}>
      <StackNavigator.Screen component={TabNavigation} name="Home" />
      <StackNavigator.Screen
        component={Welcome}
        name="Welcome"
        options={{headerShown: false}}
      />
      <StackNavigator.Screen component={SignUp} name="SignUp" />
      <StackNavigator.Screen component={SignIn} name="SignIn" />
    </StackNavigator.Navigator>
  );
};

const TabNavigation = () => (
  <Tabs.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'user' : 'user';
        } else {
          iconName = focused ? 'tags' : 'tags';
        }
        return <Icon name={iconName} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: Colors.brandPrimary,
      inactiveTintColor: 'gray',
    }}>
    <Tabs.Screen name="Home" component={Home} />
    <Tabs.Screen name="Profile" component={Profile} />
  </Tabs.Navigator>
);
