import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainStack} from './Tabs';

type DrawerStackProps = {
  Drawer: undefined;
};

const Drawer = createDrawerNavigator<DrawerStackProps>();

export default () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Drawer" component={MainStack} />
  </Drawer.Navigator>
);
