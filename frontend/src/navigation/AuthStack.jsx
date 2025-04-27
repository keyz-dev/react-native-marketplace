import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Onboarding, Login, RoleSelection, VendorRegister, ClientRegister, DeliveryRegister } from '../screens/auth';
import { NewRivals, Home, ProductDetails, Cart } from '../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RoleSelection" component={RoleSelection} />
      <Stack.Screen name="ClientRegister" component={ClientRegister} />
      <Stack.Screen name="VendorRegister" component={VendorRegister} />
      <Stack.Screen name="DeliveryRegister" component={DeliveryRegister} />


      <Stack.Screen name="ProductsList" component={NewRivals} options={{tabBarVisible: false}}/>
      <Stack.Screen name="ProductDetails" component={ProductDetails} options={{tabBarVisible: false}}/>
      <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AuthStack;
