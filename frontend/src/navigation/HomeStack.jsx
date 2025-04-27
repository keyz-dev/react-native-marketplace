import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Search, Profile, Favorites, Cart, ProductDetails, NewRivals} from '../screens'

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main " component={Home} />
        <Stack.Screen name="ProductsList" component={NewRivals} options={{tabBarVisible: false}}/>
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{tabBarVisible: false}}/>
        <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}}/>
      </Stack.Navigator>
    );
};

export default HomeStack