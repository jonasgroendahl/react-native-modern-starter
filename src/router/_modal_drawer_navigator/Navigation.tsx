import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Modal from './Modal';
import Drawer from './Drawer';

export type RootStackParamList = {
  Modal: undefined;
  Main: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Main"
        screenOptions={({route, navigation}) => ({
          gestureEnabled: true,
          cardOverlayEnabled: true,
          headerStatusBarHeight:
            navigation.dangerouslyGetState().routes.indexOf(route) > 0
              ? 0
              : undefined,
          ...TransitionPresets.ModalPresentationIOS,
        })}
        mode="modal"
        headerMode="none">
        <RootStack.Screen name="Modal" component={Modal} />
        <RootStack.Screen name="Main" component={Drawer} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
