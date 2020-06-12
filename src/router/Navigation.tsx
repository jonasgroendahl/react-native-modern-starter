import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import SignUp from '../screens/SignUp';
import TabNavigation from './TabNavigation';
import SignIn from '../screens/SignIn';
import {Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export type RootStackParamList = {
  Home: undefined;
  Welcome: undefined;
  SignUp: undefined;
  SignIn: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: false,
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Welcome"
        screenOptions={({route}) => {
          const headerName = route.state?.routes[route.state.index].name;

          return {
            headerLeft: ({onPress, canGoBack}) =>
              canGoBack ? (
                <Button onPress={onPress} transparent>
                  <Icon name="arrowleft" />
                </Button>
              ) : null,
            headerTitle: headerName,
          };
        }}>
        <RootStack.Screen component={TabNavigation} name="Home" />
        <RootStack.Screen
          component={Welcome}
          options={screenOptions}
          name="Welcome"
        />
        <RootStack.Screen component={SignUp} name="SignUp" />
        <RootStack.Screen component={SignIn} name="SignIn" />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
