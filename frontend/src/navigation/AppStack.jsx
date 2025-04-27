import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../components/CustomDrawer';
import { COLORS, SIZES } from '../constants'

import {Home, Search, Profile, Favorites, Cart, Notifications, Orders, Settings} from '../screens'

import BottomTabNavigation from './BottomTabNavigation';

const Drawer = createDrawerNavigator()

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.lightWhite,
        drawerInactiveTintColor: COLORS.black,
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigation}
        options={{
          drawerIcon: ({color, focused}) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({color, focused}) => (
            <Ionicons name={focused ? "person" : "person-outline"}  size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          drawerIcon: ({color, focused}) => (
            <Ionicons name={focused ? "notifications" : "notifications-outline"}  size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={Orders}
        options={{
          drawerIcon: ({color, focused}) => (
            <Ionicons name={focused ? "bag" : "bag-outline"}  size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
