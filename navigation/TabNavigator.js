import * as React from 'react';
import { StyleSheet } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FoodDiary from '../screens/FoodDiary';
import DailyAnalytics from '../screens/DailyAnalytics';
import WaterDiary from '../screens/WaterDiary';
import Excercise from '../screens/ExcerciseDiary';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'FoodDiary') {
            iconName = focused ? 'fast-food' : 'fast-food-outline';
          } else if (route.name === 'Excercise') {
            iconName = focused ? 'bicycle' : 'bicycle-outline';
          } else if (route.name === 'WaterDiary') {
            iconName = focused ? 'water' : 'water-outline';
          }
          return (
            <Ionicons
              name={iconName}
              size={RFValue(25)}
              color={color}
              style={styles.icons}
            />
          );
        },
      })}
      activeColor={'#E22024'}
      inactiveColor={'gray'}>
      <Tab.Screen name="FoodDiary" component={FoodDiary} />
      <Tab.Screen name="Excercise" component={Excercise} />
      <Tab.Screen name="WaterDiary" component={WaterDiary} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: '#C3EFC9',
    height: '8%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
  },
  icons: {
    width: RFValue(40),
    height: RFValue(40),
  },
});
export default BottomTabNavigator;
