import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import SignUp from '../screens/SignUp';
import TabNavigation from './TabNavigation';
import SignIn from '../screens/SignIn';
import {Button, Icon} from 'native-base';
import {baseFont} from '../components/Typography';

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
                  <Icon name="arrowleft" type="AntDesign" />
                </Button>
              ) : null,
            headerTitle: headerName,
            headerTitleStyle: {
              fontFamily: baseFont,
            },
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
