import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './TabNavigator';
import DailyAnalytics from '../screens/DailyAnalytics';
import Motivation from '../screens/Motivation';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Daily Analytics" component={DailyAnalytics} />
      <Drawer.Screen name="Motivation" component={Motivation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
