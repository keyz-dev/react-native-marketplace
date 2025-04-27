import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons} from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants'
import { StyleSheet } from 'react-native'

import {Home, Search, Profile, Favorites, Cart} from '../screens'

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    left: 5,
    elevation: 10,
    height: 70,
    borderRadius: 15,
  },
}

const CustomTabBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        top: -15,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      <View style={{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {children}
      </View>
    </TouchableOpacity>
  )
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{tabBarIcon: ({focused}) =>{
            return <Ionicons name= {focused ? "home" : "home-outline"} 
            size={24} 
            color={focused ? COLORS.primary : COLORS.gray2}/>
          }}}
        />
        <Tab.Screen 
          name="Search" 
          component={Search} 
          options={{tabBarIcon: ({focused}) =>(
            <Ionicons name="search-sharp" 
            size={24} 
            color={focused ? COLORS.primary : COLORS.gray2}/>
          )
        }}
        />
        <Tab.Screen 
          name="Cart" 
          component={Cart} 
          options={{tabBarIcon: ({focused}) =>{
            return <View>
                      <Ionicons name={focused ? "cart" : "cart-outline"} 
                        size={24} 
                        color={COLORS.gray2}
                      />
                      <Text style={
                        {position: 'absolute',
                        top: -10,
                        right: -6,
                        color: COLORS.white, 
                        fontSize: SIZES.medium,}
                        }
                      >8</Text>
              </View>
          },
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )}}
        />
        <Tab.Screen 
          name="Favorites" 
          component={Favorites} 
          options={{tabBarIcon: ({focused}) =>{
            return <Ionicons name="heart" 
            size={24} 
            color={focused ? COLORS.primary : COLORS.gray2}/>
          }}}
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{tabBarIcon: ({focused}) =>{
            return <Ionicons name= {focused ? "person" : "person-outline"} 
            size={24} 
            color={focused ? COLORS.primary : COLORS.gray2}/>
          }}}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation