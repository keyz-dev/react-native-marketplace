import React, {useEffect} from "react";
import  {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

// Importing user screens
import {
    Home,
} from "./test_screens/index";
import BottomTabNavigation from "./navigation/BottomTabNavigation";

import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import { loadUser} from "./stateManagement/actions/userAction";

const Stack = createNativeStackNavigator();

const Main = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Bottom Navigation" component={BottomTabNavigation} options={{headerShown:false}}/>
                <Stack.Screen name="home" component={Home} />
            </Stack.Navigator>
            <Toast position="top" />
        </NavigationContainer>
    );
}
export default Main;