import React, {useEffect} from "react";
import  {NavigationContainer} from "@react-navigation/native";
<<<<<<< HEAD
import {AppStack, AuthStack} from "./navigation";
=======
import {createNativeStackNavigator} from "@react-navigation/native-stack";

// Importing user screens
import {
    Home,
    ProductDetails,
    Cart
} from "./screens/index";
import BottomTabNavigation from "./navigation/BottomTabNavigation";

>>>>>>> 9cb7e11535ce99d81d01a764bd0bd2d3c94eb845
import Toast from "react-native-toast-message";
import { useAuth } from "./stateManagement/contexts";
import { Loader } from "./components";

const Main = () => {
    const {user, loading } = useAuth()

    if (loading){
        return (
            <Loader />
        )
    }

    return (
        <NavigationContainer>
<<<<<<< HEAD
            {user ? <AppStack /> : <AuthStack />}
=======
            <Stack.Navigator>
                <Stack.Screen name="Bottom Navigation" component={BottomTabNavigation} options={{headerShown:false}}/>
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown:false}}/>
                <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}}/>
            </Stack.Navigator>
>>>>>>> 9cb7e11535ce99d81d01a764bd0bd2d3c94eb845
            <Toast position="top" />
        </NavigationContainer>
    );
}
export default Main;